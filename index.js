const slider = document.getElementById("myRange");
const passLength = document.getElementById("passwordLength");
const sliderContainer = document.querySelector(".slidecontainer");

passLength.innerText = slider.value;

slider.oninput = function () {
  passLength.innerHTML = this.value;
};

sliderContainer.addEventListener("mouseover", () => {
  slider.classList.add("active");
});

sliderContainer.addEventListener("mouseout", () => {
  slider.classList.remove("active");
});

const sliderEl = document.querySelector(".slider");

sliderEl.addEventListener("input", (event) => {
  const progress = (event.target.value / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #A4FFAF ${progress}%, #18171F ${progress}%)`;
});

// Set initial fill
const initialProgress = (sliderEl.value / sliderEl.max) * 100;
sliderEl.style.background = `linear-gradient(to right, #A4FFAF ${initialProgress}%, #18171F ${initialProgress}%)`;
