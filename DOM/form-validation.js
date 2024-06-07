document.getElementById("sampleForm").addEventListener("submit", function(event) {
    // Get form elements
    var name = document.getElementById("name").value.trim();
    var genderMale = document.getElementById("male").checked;
    var genderFemale = document.getElementById("female").checked;
    var division = document.getElementById("division").value;
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();
    var errorElement = document.getElementById("error");
    var errorMessages = [];

    // Validation checks
    if (name === "") {
        errorMessages.push("Name is required.");
    }

    if (!genderMale && !genderFemale) {
        errorMessages.push("Gender is required.");
    }

    if (division === "") {
        errorMessages.push("Division is required.");
    }

    if (email === "") {
        errorMessages.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorMessages.push("Email is invalid.");
    }

    if (phone === "") {
        errorMessages.push("Phone number is required.");
    } else if (!/^\+880\d{10}$/.test(phone)) {
        errorMessages.push("Phone number must follow the format +88012345678910.");
    }

    if (message === "") {
        errorMessages.push("Message is required.");
    }

    // If there are error messages, prevent form submission and display errors
    if (errorMessages.length > 0) {
        event.preventDefault();
        errorElement.innerHTML = errorMessages.join("<br>");
        errorElement.style.display = "block";
    } else {
        errorElement.style.display = "none";
    }


});
