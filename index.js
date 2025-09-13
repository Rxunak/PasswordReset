const slider = document.getElementById("myRange");
const passLength = document.getElementById("passwordLength");

passLength.innerText = slider.value;

slider.oninput = function () {
  passLength.innerHTML = this.value;
};
