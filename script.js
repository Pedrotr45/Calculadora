let screen = document.getElementById('screen');
let equation = '';

function updateScreen(value) {
  if (screen.textContent === '0') {
    screen.textContent = '';
  }
  
  screen.textContent += value;
  equation += value;
}

function clearScreen() {
  screen.textContent = '0';
  equation = '';
}

function backspace() {
  let currentScreen = screen.textContent;
  let newScreen = currentScreen.substring(0, currentScreen.length - 1);
  screen.textContent = newScreen;
  equation = newScreen;
}

function calculate() {
  let result = eval(equation);
  screen.textContent = result;
  equation = result.toString();
}