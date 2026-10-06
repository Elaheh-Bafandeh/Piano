//* Piano Project ✨

const pianoKeys = document.querySelectorAll(".key");
const audio = document.querySelector("audio");
const volumeInput = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");
const spanElements = document.querySelectorAll(".key span");

document.addEventListener("keydown", function (event) {
  pianoKeys.forEach(function (keyitem) {
    if (event.key === keyitem.dataset.key) {
      audio.src = `./public/tunes/${keyitem.dataset.key}.wav`;
      audio.play();
      keyitem.classList.add("active");
      setTimeout(function () {
        keyitem.classList.remove("active");
      }, 300);
    }
  });
});

// Volume Control
volumeInput.addEventListener("input", function () {
  let volumeInputValue = volumeInput.value;
  audio.volume = volumeInputValue;
});

// Show/Hide Keys
keysCheckbox.addEventListener("change", function () {
  if (keysCheckbox.checked) {
    spanElements.forEach(function (spanitem) {
      spanitem.style.display = "block";
    });
  } else {
    spanElements.forEach(function (spanitem) {
      spanitem.style.display = "none";
    });
  }
});
