

   // Wait for the DOM to load
   document.addEventListener('DOMContentLoaded', function() {
    // Get the form and result div elements
    var form = document.getElementById('form');
    var resultDiv = document.getElementById('ply-name');
    

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();

      // Retrieve the form values
      var name = document.getElementById('player-name').value;
        // console.log(name)
      // Display the form data in the result div
      resultDiv.innerHTML = name ;
    });
  });

var SubmitBtn = document.getElementById('submit');
function closeModal(){
  var enteredName = document.getElementById('player-name').value;
  console.log(enteredName);

  if(enteredName =! '' && enteredName.length>3){
    SubmitBtn.setAttribute("data-bs-dismiss", "modal");
  }
  else{
    alert('Plese fill out the form')
  }
  }  

SubmitBtn.addEventListener('click', closeModal)



// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the form and result div elements
var form2 = document.getElementById('form2');
var resultDiv2 = document.getElementById('ply-name2');
  // Add an event listener for form submission
form2.addEventListener('submit', function(event) {
    // Prevent the default form submission
event.preventDefault();
    // Retrieve the form values
var name2 = document.getElementById('player-name2').value;
      // console.log(name)
    // Display the form data in the result div
resultDiv2.innerHTML = name2 ;
});
});

var SubmitBtn2 = document.getElementById('submit2');
function closeModal2(){
var enteredName2 = document.getElementById('player-name2').value;
console.log(enteredName2);

if(enteredName2 = !'' && enteredName2.length>3){
  SubmitBtn2.setAttribute("data-bs-dismiss", "modal");
}
else{
  alert('Plese fill out the form')
}
}  

SubmitBtn2.addEventListener('click', closeModal2)