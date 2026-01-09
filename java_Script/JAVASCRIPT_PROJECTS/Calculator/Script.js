const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button");

    let currentInput = "";
    let lastResult = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.innerText;

            // AC – Clear all
            if (value === "AC") {
                currentInput = "";
                display.value = "0";
            }

            // DE – Delete last character
            else if (value === "DE") {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput || "0";
            }

            // = – Calculate result
            else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                } catch {
                    display.value = "Error";
                    currentInput = "";
                }
            }

            // Prevent multiple dots in a number
            else if (value === ".") {
                if (!currentInput.includes(".")) {
                    currentInput += value;
                    display.value = currentInput;
                }
            }

            // Numbers & Operators
            else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });