let index = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        function nextSlide() {
            index = (index + 1) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }
        setInterval(nextSlide, 5000);
        // Устанавливаем выбранное значение из localStorage при загрузке страницы
  // Устанавливаем выбранное значение из localStorage при загрузке страницы
  window.onload = function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      document.getElementById('languageSelect').value = savedLanguage;
    }
  };

  document.getElementById('languageSelect').addEventListener('change', function() {
    const language = this.value;
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('selectedLanguage', language);
    
    if (language === 'en') {
      window.location.href = 'index.html'; // замените на нужный файл
    } else if (language === 'ru') {
      window.location.href = 'index-ru.html'; // замените на нужный файл
    } else if (language === 'es') {
      window.location.href = 'index-ua.html'; // замените на нужный файл
    }
  });
          