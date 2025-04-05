const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add("lazy-photo");
    } else {
      entry.target.classList.remove("lazy-photo");
    }
  });
});


photos.forEach((photo) => {
  observer.observe(photo);
});


const images = document.querySelectorAll('.photo-button');
const button = document.querySelector('.button-photo');

button.addEventListener("click", () => {
    images.forEach((image) => {
        image.src = image.dataset.src;
    image.classList.add("lazy-photo");
    })
});
