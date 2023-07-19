let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
let invalidMsg = document.getElementById('invalid-message');



const samePassword = () => {
    let message = "";
    if(password.value !== confirmPassword.value){
        invalidMsg.innerText = '* Password do not match';
        message = "Password do not match";
        password.setCustomValidity(message);
        confirmPassword.setCustomValidity(message);
    }else{
        invalidMsg.innerText = '';
        password.setCustomValidity('');
        confirmPassword.setCustomValidity('');
    };
};

password.addEventListener('input', samePassword);
confirmPassword.addEventListener('input', samePassword);

