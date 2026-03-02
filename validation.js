
function validateRequired(obj) {
    if (obj.value.trim() === "") {
        obj.value = "Field is required";
        obj.style.color = "#FF0000";
    } else {
        obj.style.color = "#000000";
    }
}

function validateEmail(obj) {
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (obj.value.trim() === "") {
        obj.value = "Field is required";
        obj.style.color = "#FF0000";
    }
    else if (!obj.value.match(emailPattern)) {
        obj.value = "Invalid email format (example: joe@test.com)";
        obj.style.color = "#FF0000";
    }
    else {
        obj.style.color = "#000000";
    }
}

function validatePasswordMatch() {
    let pass = document.getElementById("password");
    let confirm = document.getElementById("confirmPassword");

    if (confirm.value.trim() === "") {
        confirm.value = "Field is required";
        confirm.style.color = "#FF0000";
    }
    else if (pass.value !== confirm.value) {
        confirm.value = "Passwords do not match";
        confirm.style.color = "#FF0000";
    }
    else {
        confirm.style.color = "#000000";
    }
}

function validateForm() {
    validateRequired(document.getElementById("username"));
    validateEmail(document.getElementById("email"));
    validateRequired(document.getElementById("password"));
    validatePasswordMatch();
}
