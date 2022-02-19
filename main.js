const colorCode = document.querySelector(".hex-color-code");
const background = document.querySelector("body");
const generateColor = document.querySelector(".btn-generate");
const copyColor = document.querySelector(".icon");

let hex_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hex_color = [null];
let hex_code = null;

//Generate random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Generate hex-color-code
function generate_hex() {
  for (let i = 0; i <= 5; i++) {
    hex_color[i] = hex_values[getRandomInt(hex_values.length)];
  }

  return hex_color.join("");
}

function change_color(object, new_color) {
  var original_color = "grey";
  object.style.color = new_color;

  window.setTimeout(function () {
    object.style.color = original_color;
  }, 1500);
}

//Generate color on button click
generateColor.addEventListener("click", function () {
  hex_code = generate_hex();

  colorCode.innerHTML = "#" + hex_code;
  background.style.backgroundColor = "#" + hex_code;
  generateColor.style.backgroundColor = "#" + hex_code;
});

copyColor.addEventListener("click", function () {
  const text = hex_code;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      change_color(copyColor, "#66bb6a");
    })
    .catch((err) => {
      change_color(copyColor, "#f44336");
    });
});

hex_code = generate_hex();

colorCode.innerHTML = "#" + hex_code;
background.style.backgroundColor = "#" + hex_code;
generateColor.style.backgroundColor = "#" + hex_code;
