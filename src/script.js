"use strict";



const header = document.querySelector("haeder");
const sectionOne = document.querySelector(".about");
const sections = document.querySelectorAll("section");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0.7,
    rootMargin: "0px 0px 0px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            // console.log(entry.target);
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
});

// form validation

const form = document.querySelector(".form");

const inputName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const phone = document.getElementById("phone");
const formContainer = document.querySelector('.container');
const successMessage = document.querySelector('.submit-success');
const submitNextBtn = document.querySelector('.another');

form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    validateInputs();
    // formContainer.classList.add('hidden');
    // successMessage.classList.remove('hidden');
    sendEmail();
}

// submitNextBtn.addEventListener('click', () => {
//     formContainer.classList.remove('hidden');
//     successMessage.classList.add('hidden');
// })

function sendEmail() {
    
    var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


    Email.send({
        SecureToken : "a9e0425a-3403-484a-a28c-50ac72e160db",
        To : 'suski.marcin@gmail.com',
        From : email.value,
        Subject : "Contact form",
        Body : message.value
    }).then(
      message => alert(message)
    );
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const nameValue = inputName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const phoneValue = phone.value.trim();

    // Validate the form fields
    if (nameValue == "") {
        setError(inputName, "name required");
  
    } else {
        setSuccess(inputName);
    }

    if (emailValue == "") {
        setError(email, "e-mail required");
       
    } else if (!isValidEmail(emailValue)) {
        setError(email, "valide e-mail required (containing @)");
      
    } else {
        setSuccess(email);
    }

    if (messageValue == "") {
        setError(message, "Please entere a message");
   
    } else {
        setSuccess(message);
    }

    if (nameValue == "" || emailValue == "" || !isValidEmail(emailValue) || messageValue == ""){
        return false;
    }

    console.log("success");
    return true;
};

inputName.addEventListener("change", () => {
    const parent = inputName.parentElement;
    const sibling = parent.querySelector(".label");
    if (inputName.value !== "") {
        sibling.classList.add("active");
    } else {
        sibling.classList.remove('active');
    }
});

email.addEventListener("change", () => {
    const parent = email.parentElement;
    const sibling = parent.querySelector(".label");
    if (email.value !== "") {
        sibling.classList.add("active");
    } else {
        sibling.classList.remove('active');
    }
});

phone.addEventListener("change", () => {
    const parent = phone.parentElement;
    const sibling = parent.querySelector(".label");
    if (phone.value !== "") {
        
        sibling.classList.add("active");
    } else {
        sibling.classList.remove('active');
    }
});

message.addEventListener("change", () => {
    const parent = message.parentElement;
    const sibling = parent.querySelector(".label");
    if (message.value !== "") {
        
        sibling.classList.add("active");
    } else {
        sibling.classList.remove('active');
    }
});
