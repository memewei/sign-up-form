const submitBtn = document.querySelector('.submit-btn');
const phoneNum = document.querySelector('#phone-number');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
const email = document.querySelector('#email');
const lastName = document.querySelector('#last-name');
const firstName = document.querySelector('#first-name');
const error = document.getElementsByClassName('error');
const input = document.querySelectorAll('input');
const details = document.querySelector('.form-body');

let count = 0;

function validate(current, string, bool){
    let message = current;
    message.textContent = string;
    bool != 0 ? ++count : count;
}

for(let i=0; i<input.length; i++){
    let currentInput = input[i];
    let currentError = error[i];

    currentInput.addEventListener('keyup', (e) =>{
        let message = currentError;
        e.target.value != "" ? validate(currentError, "", 0) : validate(currentError, "*required", 0);
    });
}

firstName.addEventListener('keyup', (e) =>{
    let message = error[0];
    var regex = /^[0-9]+$/;
    e.target.value != regex ? validate(message, "", 1) : validate(message, "Are you a robot????", 0);
});

lastName.addEventListener('keyup', (e) =>{
    let message = error[1];
    var regex = /^[0-9]+$/;
    e.target.value != regex ? validate(message, "", 1) : validate(message, "Are you a robot????", 0);
});

phoneNum.addEventListener('keyup', (e) =>{
    let message = error[3];
});

function togglePassword(){
    var passwordKey = document.getElementById("password");
    if(passwordKey.type === "password"){
        password.type = "text";
    }else{
        passwordKey.type = "password";
    }
}