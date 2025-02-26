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
  // Устанавливаем выбранное значение из sessionStorage при загрузке страницы
  // Функция для определения текущего языка по URL
  function setLanguage() {
    const currentPage = window.location.pathname; // Получаем путь текущей страницы
    const languageSelect = document.getElementById('languageSelect');
    
    // Проверяем, какой язык используется в имени файла и выбираем соответствующий option
    if (currentPage.includes('index-ru.html')) {
      languageSelect.value = 'ru';
    } else if (currentPage.includes('index-ua.html')) {
      languageSelect.value = 'es';
    } else {
      languageSelect.value = 'en';
    }
  }

  // Вызываем функцию при загрузке страницы
  window.onload = setLanguage;

  // Добавляем обработчик изменения языка
  document.getElementById('languageSelect').addEventListener('change', function() {
    const language = this.value;

    if (language === 'en') {
      window.location.href = 'index.html';
    } else if (language === 'ru') {
      window.location.href = 'index-ru.html';
    } else if (language === 'es') {
      window.location.href = 'index-ua.html';
    }
  });
          