document.addEventListener("DOMContentLoaded", () => {
  const demoSection = document.getElementById("demoSection");
  const startDemoButton = document.getElementById("startDemo");
  const backButton = document.getElementById("backButton");

  // Show the demo section and hide the landing page button
  startDemoButton.addEventListener("click", () => {
    demoSection.style.display = "block";
    startDemoButton.style.display = "none";
  });

  // Back to landing page
  backButton.addEventListener("click", () => {
    demoSection.style.display = "none";
    startDemoButton.style.display = "inline-block";
  });

  // Variables and Input/Output
  const greetButton = document.getElementById("greetButton");
  greetButton.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    const greeting = name ? `Hello, ${name}! Welcome to the demo.` : "Please enter your name.";
    document.getElementById("greetingOutput").innerText = greeting;
  });

  // Conditionals
  const checkButton = document.getElementById("checkButton");
  checkButton.addEventListener("click", () => {
    const number = parseInt(document.getElementById("numberInput").value);
    const result = isNaN(number)
      ? "Please enter a valid number."
      : number % 2 === 0
      ? `${number} is even.`
      : `${number} is odd.`;
    document.getElementById("conditionOutput").innerText = result;
  });

  // Looping
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", () => {
    const num = parseInt(document.getElementById("sumInput").value);
    if (isNaN(num) || num < 1) {
      document.getElementById("loopOutput").innerText = "Please enter a valid number greater than 0.";
    } else {
      let sum = 0;
      for (let i = 1; i <= num; i++) {
        sum += i;
      }
      document.getElementById("loopOutput").innerText = `The sum of numbers from 1 to ${num} is ${sum}.`;
    }
  });
});
