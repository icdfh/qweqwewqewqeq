const projects = [
    { title: "Интерактивный To-Do List с приоритетами", description: "Список дел с сортировкой по приоритетам и статусу выполнения. Данные сохраняются в localStorage." },
    { title: "Чат-приложение с использованием WebSocket", description: "Чат в реальном времени с использованием WebSocket." },
    { title: "Система бронирования билетов на мероприятия", description: "Приложение для бронирования билетов с выбором мест и подсчетом стоимости." },
    { title: "Симулятор магазина с корзиной покупок", description: "Интернет-магазин с корзиной, подсчетом стоимости и сохранением данных в localStorage." },
    { title: "Интерактивная карта с API Google Maps", description: "Карта с маркерами, данные сохраняются в localStorage или базе данных." },
    { title: "Создание 2D игры на Canvas API", description: "Простая игра, например 'Змейка', с использованием Canvas API." },
    { title: "Приложение для управления финансами", description: "Отслеживание доходов и расходов с графиками и отчетами. Данные сохраняются в localStorage." },
    { title: "Генератор случайных цитат с использованием AJAX", description: "Приложение для получения случайных цитат через API с сохранением избранных цитат." },
    { title: "Калькулятор времени тренировки", description: "Таймер тренировки с отслеживанием прогресса и статистикой за неделю." },
    { title: "Многоязычный сайт с поддержкой локализации", description: "Веб-сайт с динамическим переключением языка на основе JSON." },
    { title: "Календарь событий с уведомлениями", description: "Календарь с возможностью создания и управления событиями. Включает уведомления." },
    { title: "Приложение для рисования на HTML5 Canvas", description: "Инструмент для рисования с возможностью сохранения изображения в PNG." },
    { title: "Медиа-плеер с плейлистом", description: "Простой медиаплеер с плейлистом и возможностью управления треками." },
    { title: "Генератор паролей с настройками", description: "Создание сложных паролей с настройками длины и типа символов." },
    { title: "Платформа для онлайн-опросов", description: "Создание и проведение опросов с визуализацией результатов." },
    { title: "Доска объявлений с фильтрацией", description: "Приложение для публикации объявлений с фильтрацией по категориям и цене." },
    { title: "Приложение для отслеживания погоды с использованием API", description: "Приложение для отображения текущей погоды в выбранном городе." },
    { title: "Форум с поддержкой комментариев", description: "Приложение, где пользователи могут создавать темы и оставлять комментарии." },
    { title: "Квестовая игра с диалогами и выбором", description: "Текстовая игра, где пользователи принимают решения, влияющие на развитие сюжета." },
    { title: "Сайт для изучения языков с карточками", description: "Приложение для изучения иностранных слов с помощью карточек вопрос-ответ." },
    { title: "Приложение для создания резюме", description: "Генерация резюме на основе введенных данных с возможностью сохранения в PDF." },
    { title: "Система заметок с категориями и тегами", description: "Заметки с возможностью добавления категорий и тегов." },
    { title: "Приложение для отслеживания задач с drag-and-drop", description: "Задачи, которые можно перетаскивать между статусами." },
    { title: "Приложение для отслеживания чтения книг", description: "Приложение для ведения списка прочитанных книг с оценками." },
    { title: "Калькулятор с историей вычислений", description: "Калькулятор с возможностью сохранения истории вычислений." },
    { title: "Реализация игры 'Крестики-нолики'", description: "Игра с возможностью игры против компьютера или другого игрока." },
    { title: "Магазин книг с корзиной и фильтрацией", description: "Интернет-магазин книг с корзиной и фильтрацией по жанрам." },
    { title: "Тестирование с использованием Mocha и Chai", description: "Приложение с тестами по JavaScript с автоматической проверкой." },
    { title: "Приложение для ведения блога с редактором Markdown", description: "Публикация записей блога с использованием Markdown." },
    { title: "Квиз с таймером и подсчетом очков", description: "Викторина с ограниченным временем на ответ и подсчетом очков." }
  ];
  
  function displayProjects() {
    const projectList = document.getElementById('projectList');
    projects.forEach((project, index) => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project';
  
      const title = document.createElement('h2');
      title.textContent = `${index + 1}. ${project.title}`;
  
      const description = document.createElement('p');
      description.textContent = project.description;
  
      projectDiv.appendChild(title);
      projectDiv.appendChild(description);
      projectList.appendChild(projectDiv);
    });
  }
  
  window.onload = displayProjects;
  