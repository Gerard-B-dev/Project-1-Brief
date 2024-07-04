function validateName() {
    const element = document.getElementById("name").value;
    if (element === "ironhack") {
        alert("Soy ironhack");
    }
    else if (element === "") {
        alert("El campo Name está vacío");
    }
    else {
        alert("No soy ironhack");
    }
}

function validateEmail() {
    const element = document.getElementById("email-form").value;
    const emailVerify = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailVerify.test(element)) {
        alert("E-mail correcto");
    } else {
        alert("E-mail incorrecto");
    }
}

document.getElementById("submitForm").addEventListener("click", function(event) {
    
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.remove();
    });

   
    var name = document.getElementById("name");
    var email = document.getElementById("email-form");
    var phone = document.getElementById("phone-form");
    var message = document.getElementById("message-form");

 
    var isValid = true;

   
    if (name.value.trim() === "") {
        isValid = false;
        showError(name, "El nombre es obligatorio");
    }

    if (email.value.trim() === "") {
        isValid = false;
        showError(email, "El e-mail es obligatorio");
    }

    if (phone.value.trim() === "") {
        isValid = false;
        showError(phone, "El teléfono es obligatorio");
    }

    if (message.value.trim() === "") {
        isValid = false;
        showError(message, "El mensaje es obligatorio");
    }

 
});

function showError(element, message) {
    var errorSpan = document.createElement("span");
    errorSpan.classList.add("error-message");
    errorSpan.textContent = message;
    element.parentNode.appendChild(errorSpan);
}



const submit = document.getElementById("submitForm");

submit.addEventListener("click", validateAll);

function validateAll(e) {
    e.preventDefault();
    validateName();
    validateEmail();
}