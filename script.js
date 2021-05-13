let colorOne = document.getElementById('color-a');
let colorTwo = document.getElementById('color-b');
let currentDirection = "to bottom";
let output = document.getElementById('code');

function setDirection(value, _this){
  let directions = document.querySelectorAll('.buttons button')
  console.log(directions);
  for(let i of directions){
    i.classList.remove('active');
  }
  _this.classList.add('active');
  currentDirection = value;
  console.log(currentDirection);
}

function generateCode(){
  output.value= `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value} );`
 
  document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value} ) `;
}

function copyText(){
  output.select();
  document.execCommand('copy');
  alert('Gradiend Copied!');
}

generateCode();