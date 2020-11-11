const login = document.querySelector("#loginW");
const windowLogin = document.querySelector(".window-login");
const middleLayer = document.querySelector(".middle-layer");

// Open Login Window
function windowShow() {
    windowLogin.style.display = "block";
    middleLayer.style.display = "block"; 
}
login.addEventListener("click", windowShow);

// Form input
const loginForm = document.querySelector("#login-form");
const passwordForm = document.querySelector("#password-form");
// Close Login Window
function windowClose(){
    windowLogin.style.display = "none";
    middleLayer.style.display = "none";
    windowRegistration.style.display = "none";
    loginForm.value = "";
    passwordForm.value = "";
    loginFormReg.value = "";
    enterButton.style.backgroundColor = "wheat";
    enterButton.style.cursor = "default";
    nextButton.style.backgroundColor = "wheat";
    nextButton.style.cursor = "default";
    regCheckbox.checked = false;
    windowRecovery.style.display = "none";
    recoveryForm.value = "";
    sendButtton.style.backgroundColor = "wheat";
    sendButtton.style.cursor = "default";
    photosLayer.style.display = "none";
    num = 0;
}
middleLayer.addEventListener("click", windowClose);
const exitButton = document.querySelectorAll(".exit-button");
exitButton.forEach((elem) => {
    elem.addEventListener("click", windowClose);
});

const enterButton = document.querySelector("#enter-button");
// Activate Login Button
function activateForm(){
    if (loginForm.value !="" && passwordForm.value != "") {
        enterButton.style.backgroundColor = "rgb(253, 198, 94)";
        enterButton.style.cursor = "pointer";
    }   
    else {
        enterButton.style.backgroundColor = "wheat";
        enterButton.style.cursor = "default";
    }
}
loginForm.addEventListener("input", activateForm);
passwordForm.addEventListener("input", activateForm);

const registerButton = document.querySelector("#register-button");
const windowRegistration = document.querySelector(".window-registration");
// Open Registration Window
function openRegistrationWindow(){
    windowLogin.style.display = "none";
    loginForm.value = "";
    passwordForm.value = "";
    windowRegistration.style.display = "block";
    enterButton.style.backgroundColor = "wheat";
    enterButton.style.cursor = "default";
}
registerButton.addEventListener("click", openRegistrationWindow);

const loginButton = document.querySelector("#login-button");
function loginWindowShow() {
    windowLogin.style.display = "block";
    windowRegistration.style.display = "none";
    loginFormReg.value = "";
    regCheckbox.checked = false;
    nextButton.style.backgroundColor = "wheat";
    nextButton.style.cursor = "default";
}
loginButton.addEventListener("click",loginWindowShow);

const nextButton = document.querySelector("#next-button");
const loginFormReg = document.querySelector("#login-form-reg");
const regCheckbox = document.querySelector("#reg-checkbox");
function activateNextButton(){
    if (loginFormReg.value !="" && regCheckbox.checked == true) {
        nextButton.style.backgroundColor = "rgb(253, 198, 94)";
        nextButton.style.cursor = "pointer";
    }   
    else {
        nextButton.style.backgroundColor = "wheat";
        nextButton.style.cursor = "default";
    }
}
loginFormReg.addEventListener("input", activateNextButton);
regCheckbox.addEventListener("input", activateNextButton);
const acceptTerms = document.querySelector("#accept-terms");
function termsOpen(){
    alert("кто прочитал тот чьмо :)");
}
acceptTerms.addEventListener("click", termsOpen);

const windowRecovery = document.querySelector(".password-recovery");
const forgetPasswordButton = document.querySelector("#forget-password");
const recoveryForm = document.querySelector("#recovery-form");
function openRecoveryWindow(){
    windowRecovery.style.display = "block";
    windowLogin.style.display = "none";
}
forgetPasswordButton.addEventListener("click", openRecoveryWindow);
const sendButtton = document.querySelector("#send-button");
function activateSendButton(){
    if (recoveryForm.value !="") {
        sendButtton.style.backgroundColor = "rgb(253, 198, 94)";
        sendButtton.style.cursor = "pointer";
    }   
    else {
        sendButtton.style.backgroundColor = "wheat";
        sendButtton.style.cursor = "default";
    }
}
recoveryForm.addEventListener("input", activateSendButton);

// Photos Page
const photos = document.querySelectorAll(".photo");
const photosLayer = document.querySelector(".photos-layer");
const activeImage = document.querySelector("#active-image");
const closeIcon = document.querySelector("#close");
// Show Image Window
function displayImage(e){
    activeImage.src = e.target.src;
    middleLayer.style.display = "block"; 
    photosLayer.style.display = "block";
}
photos.forEach(img => img.addEventListener("click", displayImage))

closeIcon.addEventListener("click", closeImage);
// Close Image Window
function closeImage(){
    middleLayer.style.display = "none"; 
    photosLayer.style.display = "none";
}

const next = document.querySelector("#right").addEventListener("click", nextImage);
// Next Image
function nextImage(){
    for(var i=0; i<photos.length; i++){
        if(activeImage.src === photos[i].src){
            var nextImageVar = photos[i].nextElementSibling; 
        }
    }
    if(nextImageVar === null){
        activeImage.src = photos[0].src;
    }
    else{
       activeImage.src = nextImageVar.src; 
    }
}

const previous = document.querySelector("#left").addEventListener("click", previousImage);
// Previous Image
function previousImage(){
    for(var i=0; i<photos.length; i++){
        if(activeImage.src === photos[i].src){
            var nextImageVar = photos[i].previousElementSibling; 
        }
    }
    if(nextImageVar === null){
        activeImage.src = photos[photos.length - 1].src;
    }
    else{
       activeImage.src = nextImageVar.src; 
    }
}