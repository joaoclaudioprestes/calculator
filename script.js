const btnOperator = [...document.querySelectorAll(".btnOperator")];
const btnNumbers = [...document.querySelectorAll(".btnNumber")];
const clear = document.querySelector("#btnClear");
const calcule = document.querySelector("#btnCalc");
const spanResult = document.querySelector("#result");
const spanCalcule = document.querySelector("#calcule");
const btnCopy = document.querySelector("#clickBordButton");

let decimal = false;
let equalOperator = false;

function calculate(spanCalcule) {
  return eval(spanCalcule);
}

function addNumberToResult(number) {
  if (number === ",") {
    if (spanResult.innerHTML !== "" && !decimal) {
      spanResult.innerHTML += number;
      decimal = true;
    }
  } else {
    spanResult.innerHTML += number;
    decimal = false;
  }
}

function handleOperator(operator) {
  if (spanResult.innerHTML !== "") {
    if (operator === "=") {
      if (spanResult.innerHTML !== "") {
        spanCalcule.innerHTML = spanResult.innerHTML;
        equalOperator = false;
        const resultFinal = calculate(spanResult.innerHTML);
        spanResult.innerHTML = resultFinal.toFixed(2);
      }
    } else if (spanResult.innerHTML !== "") {
      if (!equalOperator) {
        spanResult.innerHTML += operator;
        equalOperator = true;
      }
    }
  }
}

btnNumbers.forEach((element) => {
  element.addEventListener("click", (evt) => {
    addNumberToResult(evt.target.innerHTML);
  });
});

btnOperator.forEach((element) => {
  element.addEventListener("click", (evt) => {
    handleOperator(evt.target.innerHTML);
  });
});

clear.addEventListener("click", () => {
  spanResult.innerHTML = "";
  spanCalcule.innerHTML = "0";
  decimal = false;
  equalOperator = false;
});

btnCopy.addEventListener("click", () => {
  const copy = spanResult.innerHTML;
  navigator.clipboard.writeText(copy);
});