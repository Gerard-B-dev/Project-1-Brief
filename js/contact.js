function validateName() {
    const element = document.getElementById("name").value;
    if (element === "ironhack") {
        alert("Soy ironhack");
    }
    else if (element === "") {
        alert("Este campo está vacío");
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


const submit = document.getElementById("submitForm");

submit.addEventListener("click", validateAll);

function validateAll(val) {
    val.preventDefault();
    validateName();
    validateEmail();
}