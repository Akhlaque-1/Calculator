let display = document.getElementById("display");
function append(value) {
  // If display has "Error", reset it
  if (display.value === "Error") {
    display.value = "";
  }

  // Prevent multiple operators in a row
  let lastChar = display.value.slice(-1);
  let operators = ["+", "-", "**", "/", "%", "."];

  if (operators.includes(lastChar) && operators.includes(value)) {
    // Replace last operator with new one (e.g. 8+ → 8- instead of 8+-)
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function delChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}





