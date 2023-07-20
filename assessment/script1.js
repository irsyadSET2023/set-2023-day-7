let newNumber = "";
let arr = [];

let screenDom = document.querySelector(".screen h1");

function numberClick(num) {
  if (arr.length > 0) {
    arr = [];
    newNumber = "";

    if (num == "+" || num == "-" || num == "x" || num == "/") {
      //   newNumber = screenDom.textContent + num;
      newNumber = screenDom.textContent;
    }
  }

  let number = String(num);

  newNumber = newNumber + number;
  screenDom.textContent = newNumber;
}

function clearNumber() {
  //   console.log(1);
  screenDom.textContent = 0;
  newNumber = "";
}

function equal() {
  let input = screenDom.textContent;
  input = input.replace("x", "*");

  try {
    let numberDisplay = eval(input);
    screenDom.textContent = numberDisplay;
    newNumber = numberDisplay;
    arr.push(numberDisplay);
  } catch (err) {
    // alert("syntax error");
    screenDom.textContent = "Syntax Error";
    newNumber = "";
  }

  //   let numberDisplay = eval(input);
  //   screenDom.textContent = numberDisplay;
  //   newNumber = numberDisplay;
}

function clearOnce() {
  console.log("press");
  let stringLength = screenDom.textContent.length;
  console.log(stringLength);

  if (stringLength == 1) {
    newNumber = "";
    screenDom.textContent = 0;
  } else {
    newNumber = screenDom.textContent.replace(
      screenDom.textContent[stringLength - 1],
      ""
    );
    screenDom.textContent = newNumber;
  }
}

// function equal() {
//   let input = screenDom.textContent;
//   let numberDisplay = 0;

//   if (input.includes("+")) {
//     let numbers = input.split("+");

//     console.log(numbers);
//     for (let i = 0; i <= numbers.length - 1; i++) {
//       numberDisplay += Number(numbers[i]);
//       console.log(typeof Number(numbers[i]));
//       arr.push(numbers[i]);
//     }
//   }

//   if (input.includes("-")) {
//     let numbers = input.split("-");
//     console.log(numbers);
//     numberDisplay = numbers[0];
//     for (let i = 1; i <= numbers.length - 1; i++) {
//       numberDisplay -= Number(numbers[i]);
//       console.log(typeof Number(numbers[i]));
//       arr.push(numbers[i]);
//     }
//   }

//   if (input.includes("x")) {
//     let numbers = input.split("x");
//     console.log(numbers);
//     numberDisplay = numbers[0];
//     for (let i = 1; i <= numbers.length - 1; i++) {
//       numberDisplay *= Number(numbers[i]);
//       console.log(typeof Number(numbers[i]));
//       arr.push(numbers[i]);
//     }
//   }

//   if (input.includes("/")) {
//     let numbers = input.split("/");
//     console.log(numbers);
//     numberDisplay = numbers[0];
//     for (let i = 1; i <= numbers.length - 1; i++) {
//       numberDisplay /= Number(numbers[i]);
//       console.log(typeof Number(numbers[i]));
//       arr.push(numbers[i]);
//     }
//   }

//   screenDom.textContent = numberDisplay;
//   newNumber = numberDisplay;
// }

// function operation(operate) {
//   arr.push(Number(screenDom.textContent));

//   if (arr.length > 1) {
//     if (operate == "+") {
//     }
//   }
// }
