let slides = document.querySelectorAll(".slide");
let current = 0;

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(current + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  changeSlide(current - 1);
});

function changeSlide(n) {
  slides[current].classList.remove("active");
  current = (n + slides.length) % slides.length;
  slides[current].classList.add("active");
}

// Auto slide every 5 seconds

