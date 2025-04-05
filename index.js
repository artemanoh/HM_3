// Отримуємо всі зображення з класом .photo
const photos = document.querySelectorAll(".photo");

// Створюємо IntersectionObserver для спостереження за зображеннями
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // Якщо зображення потрапляє у видиму частину екрана
    if (entry.isIntersecting) {
      // Заміна атрибута src на значення з data-src
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add("lazy-photo");
    } else {
      // Якщо зображення більше не в межах видимості, видаляємо клас lazy-photo
      entry.target.classList.remove("lazy-photo");
    }
  });
});

// Починаємо спостереження за кожним зображенням, яке ми отримали раніше
photos.forEach((photo) => {
  observer.observe(photo);  // Додаємо кожне зображення для спостереження
});

// Отримуємо всі зображення, на яких стиль кнопка для завантаження при натисканні
const images = document.querySelectorAll('.photo-button');
// Отримуємо кнопку для запуску завантаження зображень
const button = document.querySelector('.button-photo');

// Додаємо обробник події для кнопки
button.addEventListener("click", () => {
  // Коли кнопка натискається, змінюємо атрибут src для кожного зображення
  images.forEach((image) => {
    // Заміна атрибута src на значення з data-src, щоб завантажити зображення
    image.src = image.dataset.src;
    image.classList.add("lazy-photo");
  });
});
