document.addEventListener("DOMContentLoaded", function () {
  let inp = document.getElementById("cel");
  let output = document.getElementById("result");
  let button = document.getElementById("btn");
  // button.addEventListener('onclick',calF());

  

  button.addEventListener("click", function () {
    const op = calF();
    if (!isNaN(op)) {
        output.innerHTML = `Temperature in Fahrenheit: ${op.toFixed(2)}°F`;
        console.log(op);
    } else {
        output.innerHTML = "Invalid input";
    }
    
  });
  function calF() {
    const inputValue = Number(inp.value);
    return isNaN(inputValue) ? NaN : (inputValue * 9/5) + 32;
    // return (inp * 9) / 5 + 32;
  }
});
// const op=calF();
// document.getElementById('result').innerHTML=op;
// console.log(op)
