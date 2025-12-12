// Функции для переключения между экранами
function showProfile() {
    document.getElementById('main-screen').classList.remove('active');
    document.getElementById('profile-screen').classList.add('active');
    document.getElementById('projects-screen').classList.remove('active');
}

function showProjects() {
    document.getElementById('main-screen').classList.remove('active');
    document.getElementById('profile-screen').classList.remove('active');
    document.getElementById('projects-screen').classList.add('active');
}

function backToMain() {
    document.getElementById('main-screen').classList.add('active');
    document.getElementById('profile-screen').classList.remove('active');
    document.getElementById('projects-screen').classList.remove('active');
}

// Добавляем анимацию при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Создаем эффект "искр" на главном экране
    const header = document.querySelector('.header');
    if (header) {
        for (let i = 0; i < 15; i++) {
            createSpark(header);
        }
    }
    
    // Добавляем эффект наведения на кнопки
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;
            
            const ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('ripple');
            
            this.appendChild(ripples);
            
            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });
    });
    
    // Анимация для пустого бокса
    const emptyBox = document.querySelector('.empty-box');
    if (emptyBox) {
        setInterval(() => {
            emptyBox.style.backgroundColor = `rgba(255, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, 0.1)`;
        }, 2000);
    }
});

// Функция для создания эффекта искр
function createSpark(container) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    
    // Случайная позиция
    const posX = Math.random() * container.offsetWidth;
    const posY = Math.random() * 100;
    
    spark.style.left = posX + 'px';
    spark.style.top = posY + 'px';
    
    // Случайный размер
    const size = Math.random() * 4 + 1;
    spark.style.width = size + 'px';
    spark.style.height = size + 'px';
    
    // Случайный цвет оттенка красного
    const red = 255;
    const green = Math.floor(Math.random() * 150);
    const blue = Math.floor(Math.random() * 150);
    spark.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
    // Случайная анимация
    const duration = Math.random() * 2 + 1;
    spark.style.animation = `sparkle ${duration}s ease-in-out infinite`;
    
    container.appendChild(spark);
    
    // Удаляем искру через случайное время
    setTimeout(() => {
        spark.remove();
        // Создаем новую искру
        setTimeout(() => createSpark(container), Math.random() * 1000);
    }, duration * 1000);
}

// Добавляем стили для искр динамически
const style = document.createElement('style');
style.textContent = `
    .spark {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
    }
    
    @keyframes sparkle {
        0% { opacity: 0; transform: translateY(0) scale(0.5); }
        50% { opacity: 1; transform: translateY(-20px) scale(1); }
        100% { opacity: 0; transform: translateY(-40px) scale(0.5); }
    }
    
    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Функция для отображения текущего года в цитате
function updateYear() {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const quoteElement = document.querySelector('.quote');
    if (quoteElement) {
        quoteElement.textContent = `"скоро ${nextYear} год а они еще верят"`;
    }
}

// Обновляем год при загрузке
updateYear();

// Добавляем консольное сообщение
console.log('Добро пожаловать на Gryzinskiu servis! Сайт создан специально для Gryzin.');
