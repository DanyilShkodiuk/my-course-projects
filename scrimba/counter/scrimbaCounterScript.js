//initialize number to 0
let number = 0;

//take header id
let takeHeader = document.getElementById("count-el");

//showing zero in header
let showNumber = (takeHeader.textContent = 0);

//take p
let takeParagraph = document.getElementById("save-el");

//function with incrementing number
function increment() {
  //incramentation
  let counter = (number += 1);

  //showing counter on page
  takeHeader.textContent = counter;
}

//function with decrementing number
function dicrement() {
  //decramentation
  let counter = (number -= 1);

  //showing counter on page
  takeHeader.textContent = counter;
}

//saving number
function save() {
  //saving
  let saveNumber = number + ", ";

  //showing number
  takeParagraph.textContent += saveNumber;

  //reset
  takeHeader.textContent = 0;
  number = 0;
}
