console.log("Connected");

let firstName = prompt("What is FirstName");
let lastName = prompt("What is lastName");

let fullName = firstName + " " + lastName;

let greetings = "Hello my friends, my name is" + fullName;

let birthYear = prompt("What is birthyear?");

let age = 2023 - Number(birthYear);

//reassigning
// < > === !==
let yearWord;
if (age > 1) {
  yearWord = "year";
} else {
  yearWord = "years";
}

// function declaration

function calcAge() {
  let gender = "Male";
  let age = 2023 - Number(birthYear);

  let yearWord;
  if (age > 1) {
    yearWord = "years";
  } else {
    yearWord = "year";
  }

  return `${age} ${yearWord}`;
}

let calculatedAgeWithString = calcAge();

//template literal

let newGreetings = `Hello my friends, nice to meet you, my name is ${fullName}, 
I am ${age} ${age > 1 ? "years" : "year"} old I am ${calculatedAgeWithString}`;

alert(newGreetings);
