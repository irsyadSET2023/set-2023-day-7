let result = document.getElementById("result");
let counter = [];

function calculate(value) {
  if (counter.length == 1) {
    result.value = "";
    counter = [];
  }
  result.value += value;
  console.log(result.value);
}

function equal() {
  try {
    result.value = eval(result.value);
    counter.push(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

function clearResult() {
  result.value = "";
}
