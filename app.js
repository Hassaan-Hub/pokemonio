let index = 1; 

const cards = document.querySelectorAll(".card");
const track = document.querySelector(".slider-track");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function updateSlider() {
  track.style.transform = `translateX(${-index * 300}px)`;

  cards.forEach(c => c.classList.remove("active"));
  cards[index].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % cards.length;
  updateSlider();
});

prev.addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  updateSlider();
});

updateSlider();

