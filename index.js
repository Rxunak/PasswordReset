const slider = document.getElementById("myRange");
const passLength = document.getElementById("passwordLength");
const sliderContainer = document.querySelector(".slidecontainer");
const levelDiv = document.querySelector(".level");

function genPass(length, upperCase, lowercase, numbers, symbols) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  let chars = "";

  if (upperCase) chars += upperChars;
  if (lowercase) chars += lower;
  if (numbers) chars += numChars;
  if (symbols) chars += specialChars;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomPassword = Math.floor(Math.random() * chars.length);
    password += chars[randomPassword];
  }

  return password;
}

function passwordStrength(length, upperCase, lowercase, numbers, symbols) {
  let data = [upperCase, lowercase, numbers, symbols];
  let track = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === true) {
      track++;
    }
  }
  document.getElementById("level1").style.backgroundColor = "#18171f";
  document.getElementById("level2").style.backgroundColor = "#18171f";
  document.getElementById("level3").style.backgroundColor = "#18171f";
  document.getElementById("level4").style.backgroundColor = "#18171f";

  if (track >= 3 && length >= 8) {
    levelDiv.textContent = "HIGH";
    document.getElementById("level1").style.backgroundColor = "#a4ffaf";
    document.getElementById("level2").style.backgroundColor = "#a4ffaf";
    document.getElementById("level3").style.backgroundColor = "#a4ffaf";
    document.getElementById("level4").style.backgroundColor = "#a4ffaf";
  } else if (track >= 2 && length >= 6) {
    levelDiv.textContent = "MEDIUM";
    document.getElementById("level1").style.backgroundColor = "#f8cd65";
    document.getElementById("level2").style.backgroundColor = "#f8cd65";
    document.getElementById("level3").style.backgroundColor = "#f8cd65";
  } else {
    levelDiv.innerText = "LOW";
    document.getElementById("level1").style.backgroundColor = "#f64a4a";
  }
}

function generate() {
  const length = parseInt(passLength.innerText);
  const upperCase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  const checkedBoxes = [upperCase, lowercase, numbers, symbols];

  const falsyBox = checkedBoxes.every((val) => !Boolean(val));

  if (length !== 0 && falsyBox !== true) {
    const passwordGen = genPass(length, upperCase, lowercase, numbers, symbols);
    passwordStrength(length, upperCase, lowercase, numbers, symbols);
    document.querySelector(".generatedPassword").textContent = passwordGen;
    document.querySelector(".generatedPassword").style.color = "#e6e5ea";
    document.querySelector(".copyText").style.display = "none";
  }
}

function copy() {
  const copyText = document.querySelector(".generatedPassword");
  if (copyText.textContent !== "P4$5W0rd!") {
    navigator.clipboard.writeText(copyText.textContent);
    document.querySelector(".copyText").style.display = "block";
  }
}

passLength.innerText = slider.value;

slider.oninput = function (event) {
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

const initialProgress = (sliderEl.value / sliderEl.max) * 100;
sliderEl.style.background = `linear-gradient(to right, #A4FFAF ${initialProgress}%, #18171F ${initialProgress}%)`;
