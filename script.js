const slides = document.querySelectorAll(".slide");
let wasOpened = false;

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveSlides();
    slide.classList.add("active-slide");
    //auto close slide after 20 sec
    setTimeout(clearActiveSlides, 20000);
  });
}

function clearActiveSlides() {
  for (const slide of slides) {
    slide.classList.remove("active-slide");
  }
}
