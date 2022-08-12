const error1 = document.querySelector(".error1")
const error2 = document.querySelector(".error2")
const error3 = document.querySelector(".error3")
const error4 = document.querySelector(".error4")
const send = document.querySelector(".btn")


const formSub = document.getElementById("formSub");
formSub.addEventListener("click", function(e) {
    e.preventDefault();
});


const validationEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validationName =  /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const validationPass = /^.{4,12}$/;


send.addEventListener('click', function() {
    
    const name = document.getElementById("name")
    if(name.value.length === 0 || !name.value.match(validationName)) {
        error1.style.visibility = "visible";
    } else {
        error1.style.visibility = "hidden";
    };
    
    const lastName = document.getElementById("lastName")
    if(lastName.value.length === 0 || !lastName.value.match(validationName)) {
        error2.style.visibility = "visible";
    } else {
        error2.style.visibility = "hidden";
    };
    
    const email = document.getElementById("email")
    if(email.value.length === 0 || !email.value.match(validationEmail)) {
        error3.style.visibility = "visible";
    } else {
        error3.style.visibility = "hidden";
    };
    
    const pass = document.getElementById("password")
    
    if(pass.value.length === 0 || !pass.value.match(validationPass)) {
        error4.style.visibility = "visible";
    } else {
        error4.style.visibility = "hidden"; 
    }
    
})
