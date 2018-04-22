const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', checkKonamiCode);
}

function checkKonamiCode(e) {
  const key = parseInt(e.detail || e.which);
  if (code[index] == key) {
    index++;
    if ()
  }
  else {
    index = 0;
  }
}