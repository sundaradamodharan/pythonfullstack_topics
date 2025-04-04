  function checkEvenOdd() {
    const num = parseInt(document.getElementById("checkNum").value);
    const result = num % 2 === 0 ? "Even" : "Odd";
    document.getElementById("checkResult").textContent = `The number is ${result}`;
  }
