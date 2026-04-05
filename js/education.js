function generateExercise() {
  const category = document.getElementById("category").value;
  const container = document.getElementById("exercise");
  container.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let question, answer;
    if (category === "addition") {
      question = `${a} + ${b} = `;
      answer = a + b;
    } else if (category === "subtraction") {
      question = `${a} - ${b} = `;
      answer = a - b;
    } else if (category === "multiplication") {
      question = `${a} × ${b} = `;
      answer = a * b;
    } else if (category === "division") {
      b = b === 0 ? 1 : b; // avoid divide by zero
      question = `${a} ÷ ${b} = `;
      answer = (a / b).toFixed(2);
    }
    container.innerHTML += `<div>${question}<input type="text" data-answer="${answer}"></div>`;
  }
}

function checkAnswers() {
  const inputs = document.querySelectorAll("#exercise input");
  inputs.forEach(input => {
    if (input.value == input.dataset.answer) {
      input.style.backgroundColor = "lightgreen";
    } else {
      input.style.backgroundColor = "salmon";
      input.value += ` (Correct: ${input.dataset.answer})`;
    }
  });
}
