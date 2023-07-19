let firstNameDom = document.querySelector("#firstName");
let lastNameDom = document.querySelector("#lastName");
let birthYearDom = document.querySelector("#birthYear");
let greetingsDom = document.querySelector("#greetings");

function submit() {
  let firstNameValue = firstNameDom.value;
  let lastNameValue = lastNameDom.value;
  let birthYearValue = birthYearDom.value;

  let fullName = firstNameValue + " " + lastNameValue;

  let age = 2023 - Number(birthYearValue);

  // console.log(fullName);
  // console.log(age);

  let greetings = `Hello World I am ${fullName}, I am ${age} ${
    age > 1 ? "years" : "year"
  } old`;

  console.log("Fire");

  console.log(firstNameDom, lastNameDom, birthYearDom);

  console.dir(firstNameDom);

  console.log(firstNameDom.value);

  greetingsDom.innerHTML = greetings;
}
