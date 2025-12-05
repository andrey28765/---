// Слайдер для gallery.html
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Функция отображения слайда по индексу
    function showSlide(index) {
        // Коррекция индекса (циклический слайдер)
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        // Скрываем все слайды
        slides.forEach(slide => slide.style.display = 'none');
        // Показываем текущий
        slides[currentIndex].style.display = 'block';
    }

    // Переключение слайда (вызывается из onclick)
    window.changeSlide = function(direction) {
        showSlide(currentIndex + direction);
    };

    // Инициализация: показать первый слайд
    if (slides.length > 0) {
        showSlide(0);
    }

    // === Опционально: автоматическое перелистывание каждые 5 секунд ===
    /*
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
    */
});
// В script.js
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо! Мы скоро свяжемся с вами.');
    // Здесь можно отправить данные на сервер (Formspree, EmailJS и т.д.)
});