
// Player 1 Submit the name

// Wait for the DOM to load
  document.addEventListener('DOMContentLoaded', function() {
    // Get the form and result div elements
    var form = document.getElementById('form');
    var resultDiv = document.getElementById('ply-name');
    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      const formData = new FormData(form);
      const formDataObject = {};

      for (const[key, value] of formData.entries()){
        formDataObject[key] = value
      }
      console.log(formDataObject);
      // Retrieve the form values
      var name = document.getElementById('player-name').value;
        // console.log(name)
      // Display the form data in the result div
      resultDiv.innerHTML = name ;
  });
});

// Close the modal on submit for player one
var SubmitBtn = document.getElementById('submit');
function closeModal(){
  var enteredName = document.getElementById('player-name').value;
  if(enteredName =! '' && enteredName.length>3){
    SubmitBtn.setAttribute("data-bs-dismiss", "modal");
  }
  else{
    alert('Plese fill out the form')
  }
}  
SubmitBtn.addEventListener('click', closeModal)



// Player 2 Submit the name

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
// Get the form and result div elements
var form2 = document.getElementById('form2');
var resultDiv2 = document.getElementById('ply-name2');
// Add an event listener for form submission

form2.addEventListener('submit', function(event) {
  const formData = new FormData(form2);
  const formDataObject2 = {};

  for (const[key, value] of formData.entries()){
    formDataObject2[key] = value
  }
// Prevent the default form submission

event.preventDefault();
// Retrieve the form values
var name2 = document.getElementById('player-name2').value;
// console.log(name)
// Display the form data in the result div
resultDiv2.innerHTML = name2 ;
});
});

// Close the modal on submit for player two
var SubmitBtn2 = document.getElementById('submit2');
function closeModal2(){
let enteredName2 = document.getElementById('player-name2').value;
console.log(enteredName2);

if(enteredName2 = !'' && enteredName2.length>3){
  SubmitBtn2.setAttribute("data-bs-dismiss", "modal");
}
else{
  alert('Plese fill out the form')
}
}  
SubmitBtn2.addEventListener('click', closeModal2)


// Start a new game

const strNewBtn = document.getElementById('start-new-btn');
const gameField = document.getElementById('game-field');

function startNewGameBtn (){
  let secondPlayer = document.getElementById('player-name2').value;
  let firstPlayer = document.getElementById('player-name').value;
  if( firstPlayer == "" && secondPlayer == ""){
  alert('Please fill out the name fields')
}
else
{
  gameField.classList.add('game-field1')
}
}

strNewBtn.addEventListener('click', startNewGameBtn)

//Game rounds
let activePlayer = 0;

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'Y'
  },
];

const gameFieldElements = document.getElementById('square');

for(const gameFieldElement of gameFieldElements){
  gameFieldElement.addEventListener('click', )
}