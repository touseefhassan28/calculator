document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = Array.from(document.getElementsByTagName("input"));
    let newCalculation = false;

    buttons.map(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.value) {
                case 'C':
                    display.innerText = '';
                    newCalculation = false; 
                    break;
                case 'DE':
                    if (display.innerText) {
                        display.innerText = display.innerText.slice(0, -1);
                    }
                    break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText.replace('÷', '/').replace('x', '*'));
                        newCalculation = true;
                    } catch {
                        display.innerText = "Error";
                    }
                    break;
                default:
                    if (newCalculation) {
                        display.innerText = '';
                        newCalculation = false; 
                    }
                    display.innerText += e.target.value;
            }
        });
    });
});
