document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  let buttons = Array.from(document.getElementsByTagName("input"));
  let newCalculation = false;

  buttons.map((button) => {
    button.addEventListener("click", (e) => {
      switch (e.target.value) {
        case "C":
          display.innerText = "";
          newCalculation = false;
          break;
        case "DE":
          if (display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
          }
          break;
        case "=":
          try {
            display.innerText = eval(
              display.innerText.replace("÷", "/").replace("x", "*")
            );
            newCalculation = true;
          } catch {
            display.innerText = "Error";
          }
          break;
          case '%':
            try {
                let expression = display.innerText;
                let lastNumber = expression.match(/(\d+(\.\d+)?)(?!.*\d)/)[0]; // Extract the last number in the expression
                let firstNumber = expression.substring(0, expression.lastIndexOf(lastNumber)); // Extract the first part of the expression
                let percentageValue = parseFloat(lastNumber) / 100; // Calculate the percentage value
                let result = parseFloat(firstNumber) * percentageValue; // Calculate the result by multiplying the first number with the percentage value
                display.innerText = result.toString(); // Update the display with the result
            } catch {
                display.innerText = "Error"; // Handle any errors
            }
            break;
               
        default:
          if (newCalculation) {
            display.innerText = "";
            newCalculation = false;
          }
          display.innerText += e.target.value;
      }
    });
  });
});
