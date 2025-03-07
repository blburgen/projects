let firstValid = false;
let lastValid = false;
let questionValid = false;
let emailOneValid = false;
let emailTwoValid = false;

let errorMsg = document.querySelector("#errorMsg");

errorMsg.innerHTML = "";

let questionForm = document.querySelector("#questionForm");
questionForm.addEventListener("submit", checkForm);

let firstWidget = document.querySelector("#first");
firstWidget.addEventListener("input", firstName);

let lastWidget = document.querySelector("#last");
lastWidget.addEventListener("input", lastName);

let questionWidget = document.querySelector("#question");
questionWidget.addEventListener("input", questionBox);

let emailOneWidget = document.querySelector("#email");
emailOneWidget.addEventListener("input", emailOne);

let emailTwoWidget = document.querySelector("#emailtwo");
emailTwoWidget.addEventListener("input", emailTwo);

function firstName() {
    let firstName = firstWidget.value.trim();
    firstValid = firstName.length > 0; 
    
    if (firstValid) {
       firstWidget.style.backgroundColor = "green";
    }
    else {
       firstWidget.style.backgroundColor = "orange";
    };
 };

 function lastName() {
    let lastName = lastWidget.value.trim();
    lastValid = lastName.length > 0; 
    
    if (lastValid) {
       lastWidget.style.backgroundColor = "green";
    }
    else {
       lastWidget.style.backgroundColor = "orange";
    };
 };

 function questionBox() {
    let question = questionWidget.value.trim();
    questionValid = question.length > 0; 
    
    if (questionValid) {
       questionWidget.style.backgroundColor = "green";
    }
    else {
       questionWidget.style.backgroundColor = "orange";
    };
 };

 function emailOne() {
    let email = emailOneWidget.value.trim();
    emailOneValid = email.length > 0; 
    
    if (emailOneValid) {
       emailOneWidget.style.backgroundColor = "green";
    }
    else {
       emailOneWidget.style.backgroundColor = "orange";
    };
 };

 function emailTwo() {
    let email = emailOneWidget.value.trim();
    let emailTwo = emailTwoWidget.value.trim();
    emailTwoValid = email.length > 0;
    
    if (emailTwoValid){
        if(emailTwo === email){
            emailTwoWidget.style.backgroundColor = "green";
            emailOneWidget.style.backgroundColor = "green";
        }
        else {
            emailTwoValid = false;
            emailTwoWidget.style.backgroundColor = "orange";
            emailOneWidget.style.backgroundColor = "orange";
            errorMsg.innerHTML = "Both emails must match.";
        };
    }
    else {
        emailTwoWidget.style.backgroundColor = "orange";
        emailOneWidget.style.backgroundColor = "orange";
        errorMsg.innerHTML = "Both emails must match.";
    }

 }


function checkForm(event) {   
    if (!firstValid || !lastValid || !questionValid || !emailOneValid || !emailTwoValid) {
       event.preventDefault();
    }
 };