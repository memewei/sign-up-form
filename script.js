const submitBtn = document.querySelector(".submit-btn");
const phoneNum = document.getElementById("number");
const password = document.getElementById("pwd");
const passwordConfirm = document.getElementById("cfm-pwd");
const email = document.getElementById("mail");
const lastName = document.getElementById("last-name");
const firstName = document.getElementById("first-name");
const error = document.querySelectorAll("#error");
const input = document.querySelectorAll("input");
const form = document.querySelector("form");
const emailError = document.querySelector("#email-error.error");
const phoneNumError = document.querySelector("#number-error.error");
const passwordMatchError = document.querySelector("#cfm-pwd-error.error");

email.addEventListener("input", (e)=>{
  if(email.validity.valid){
    emailError.textContent = "";
    emailError.className = "error";
    email.style.color = "var(--text-color)";
  }else{
    showEmailError();
  }
});

phoneNum.addEventListener("input", (e)=>{
  if(phoneNum.validity.valid){
    phoneNumError.textContent = "";
    phoneNumError.className = "error";
    phoneNum.style.color = "var(--text-color)";
  }else{
    showPhoneNumError();
  }
});

passwordConfirm.addEventListener("keyup", (e)=>{
  if(password.value === passwordConfirm.value){
    passwordMatchError.textContent = "";
    passwordMatchError.className = "error";
    passwordMatchError.style.color = "var(--text-color)";
  }else{
    showPasswordMatchError();
  }
})

form.addEventListener("submit", (e)=>{
  if(!email.validity.valid){
    showEmailError();
    e.preventDefault();
  }
  if(!phoneNum.validity.valid){
    showPhoneNumError();
    e.preventDefault();
  }
  if(password !==  passwordConfirm){
    showPasswordMatchError();
    e.preventDefault();
  }
  form.reset();
});

function showEmailError(){
  if(email.validity.valueMissing){
    emailError.textContent = "An email is required!";
  }else if(email.validity.typeMismatch){
    emailError.textContent = "It needs to be an email address!";
  }
  emailError.className = "error active";
  email.style.color = "red";

}

function showPhoneNumError(){
  if(phoneNum.validity.valueMissing){
    phoneNumError.textContent = "Are you a boomer...? Do you not have a phone?";
  }else if(phoneNum.validity.patternMismatch){
    phoneNumError.textContent = "Follow the format! XXX-XX-XXX";
  }
  phoneNumError.className = "error active";
  phoneNum.style.color = "red";
}

function showPasswordMatchError(){
  if(passwordConfirm.validity.valueMissing){
    passwordMatchError.textContent = "Dude, confirm your password!";
  }else if(password.value !== passwordConfirm.value){
    passwordMatchError.textContent = "Hey! Key it properly!";
  }
  passwordMatchError.className = "error active";
  passwordMatchError.style.color = "red";
}

function togglePassword() {
  var passwordKey = document.getElementById("pwd");
  if (passwordKey.type === "password") {
    password.type = "text";
  } else {
    passwordKey.type = "password";
  }
  var cfmPwd = document.getElementById("cfm-pwd");
  if(cfmPwd.type === "password"){
    cfmPwd.type = "text";
  }else{
    cfmPwd.type = "password";
  }
}
