const video = document.querySelector('.hero-vid');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
    video.play();
    playBtn.style.opacity = '0';
    playBtn.style.pointerEvents = 'none';
});

video.addEventListener('ended', () => {
    video.style.opacity = '0';
    setTimeout(() => {
        video.currentTime = 0;
        video.load();
        video.style.opacity = '1';
        playBtn.style.opacity = '1';
        playBtn.style.pointerEvents = 'auto';
    }, 600);
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Собираем элементы
    const avatars = document.querySelectorAll('.slider-avatar');
    const textEl = document.getElementById('review-text');
    const nameEl = document.getElementById('review-name');
    const profEl = document.getElementById('review-prof');

    // 2. База данных отзывов (здесь 5 элементов под 5 аватарок)
    const reviewsData = [
        {
            text: "This is the first review. Excellent platform with great features!",
            name: "John Doe",
            prof: "Pro Gamer"
        },
        {
            text: "I love how easy it is to use. Highly recommended to everyone.",
            name: "Jane Smith",
            prof: "Streamer"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            name: "Naro Samartha Giks",
            prof: "Mobile gammers"
        },
        {
            text: "The integration process was flawless. 10/10 service.",
            name: "Alex Johnson",
            prof: "Developer"
        },
        {
            text: "Best customer support I have ever experienced.",
            name: "Maria Garcia",
            prof: "Casual Gamer"
        }
    ];

    let currentIndex = 2; // Начинаем с 3-го отзыва (индекс 2, так как он по центру)
    let sliderInterval;

    
    function updateSlider(index) {
        
        avatars.forEach(a => a.classList.remove('active'));
        
        
        avatars[index].classList.add('active');

        
        textEl.style.opacity = 0;
        nameEl.style.opacity = 0;
        profEl.style.opacity = 0;

        setTimeout(() => {
            textEl.textContent = reviewsData[index].text;
            nameEl.textContent = reviewsData[index].name;
            profEl.textContent = reviewsData[index].prof;
            
            textEl.style.opacity = 1;
            nameEl.style.opacity = 1;
            profEl.style.opacity = 1;
        }, 300); 
    }

    // 4. Автоматическое переключение
    function nextSlide() {
        currentIndex = (currentIndex + 1) % reviewsData.length;
        updateSlider(currentIndex);
    }

    function startAutoPlay() {
        sliderInterval = setInterval(nextSlide, 5000); // Меняем каждые 5 секунд
    }

    function resetAutoPlay() {
        clearInterval(sliderInterval);
        startAutoPlay();
    }

    // 5. Обработка клика по аватаркам
    avatars.forEach((avatar) => {
        avatar.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            currentIndex = index;
            updateSlider(currentIndex);
            resetAutoPlay(); 
        });
    });

    
});

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    mobileMenu.classList.toggle('mobile-menu--open');
});





// 1. Находим все кнопки внутри секции FAQ
const faqButtons = document.querySelectorAll('.faq-button');

// 2. Проходимся по каждой найденной кнопке
faqButtons.forEach(button => {
  
  // 3. Вешаем на каждую кнопку слушатель события "клик"
  button.addEventListener('click', function() {
    
    // 4. Находим конкретную карточку (родителя), внутри которой была нажата кнопка
    const currentCard = this.closest('.faq-card');
    
    // 5. Переключаем класс 'faq-card-active' у этой карточки
    currentCard.classList.toggle('faq-card-active');
    
  });
});