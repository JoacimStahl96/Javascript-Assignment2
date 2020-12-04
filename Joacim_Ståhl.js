"use strict";
//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];
// global variables
let myInput = document.createElement("input");
myInput.required = true;
let newForm = document.createElement("form");
//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  //Add code here to:
  //create and add form element to the Dom.
  document.body.appendChild(newForm);
}

function initLabel() {
  //Add code here to:
  //create label element and set the lable to "username" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).

  let newLabel = document.createElement("Label");
  newLabel.textContent = "Username";
  newForm.appendChild(newLabel);
}

function initInput() {
  //Add code here to:
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).
  // myInput.required;
  newForm.appendChild(myInput);
}

function initButton() {
  //create button element and set the text to "login" (TIP: use .textContent)
  ////Add it to the form element. (TIP: use .appendChild).

  let myBtn = document.createElement("button");
  myBtn.textContent = "Login";
  newForm.appendChild(myBtn);

  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).

  myBtn.addEventListener("click", function (e) {
    if (validateLoginInfo()) {
      alert("Welcome");
    } else { 
      myInput.style.border = "3px solid red";
    }
    
  });
}

function validateLoginInfo() {
  //Get the input using form input element (TIP: use .value)
  //if the username is in the usernames array return true if not return false.
  for (let i = 0; i < usernames.length; i++) {
    if (myInput.value == usernames[i]) {
      return true;
    }
  }
  if (myInput.value !== usernames) {
    return false;
  }
}

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)

document.addEventListener('DOMContentLoaded', function() {
  init();
  });
