const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  speed: 1000,
  effect: "slide",
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const countDay = document.getElementById("day");
const countHour = document.getElementById("hour");
const countMinute = document.getElementById("minute");
const countSecond = document.getElementById("second");

const start = new Date().getTime();
const duration = 25 * 24 * 60 * 60 * 1000;
const end = start + duration;
setInterval(countDown, 1000);
countDown();
function countDown() {
  const now = new Date().getTime();
  let distance = end - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countDay.textContent = days;
  countHour.textContent = hours;
  countMinute.textContent = minutes;
  countSecond.textContent = seconds;
}
