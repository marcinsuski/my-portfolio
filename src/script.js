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
const mailContent = document.getElementById("message");
const phone = document.getElementById("phone");
const formContainer = document.querySelector('.container');

const afterSubmit = document.querySelector('.submit-after');


form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();
    
    validateInputs();

}


//send email function and feedback modal for user
const sendEmail =() => {
let body = `
<b>Name: </b>${inputName.value}
<br>
<b>Email: </b>${email.value}
<br>
<b>Phone: </b>${phone.value}
<br>
<b>Message: </b>${mailContent.value}
<br>
`;

let promptContainer = document.querySelector('.prompt-message');
let promptTitle = document.querySelector('.prompt-title');
let prompt = document.querySelector('.prompt');
const closeBtn = document.querySelector('.close');
    Email.send({
        SecureToken : "a9e0425a-3403-484a-a28c-50ac72e160db",
        To : 'suski.marcin@gmail.com',
        From : 'suski.marcin@gmail.com',
        Subject : "Contact from " + email.value,
         Body : body
    }).then(
        message => {
            //show modal after submitting
            afterSubmit.classList.remove('hidden');
            // prevent page scrolling when modal is open
            document.body.classList.add('modal-open')
            //insert content into modal depending on result
            if (message == 'OK') {

                promptContainer.style.borderColor = 'hsl(164, 95%, 43%)';
                promptTitle.innerText = "Thank You!";
                prompt.innerText  = `Your email has been sent. I will answer You shortly.`;
            } else {
                promptContainer.style.borderColor = 'hsl(0, 100%, 63%)';
                promptTitle.innerText = "Error";
                prompt.innerText  = message;
                
            }
            afterSubmit.addEventListener('click', closePrompt);
            closeBtn.addEventListener('click', () => {
                afterSubmit.classList.add('hidden');
            document.body.classList.remove('modal-open');
        });
            document.addEventListener('keydown', (e) =>  {if (e.key === 'Escape') {
                afterSubmit.classList.add('hidden');
                document.body.classList.remove('modal-open');
            }});
        }
        );
      
}

// closing modal function
const closePrompt = (e) => {
    if (e.target === afterSubmit) {
        afterSubmit.classList.add('hidden')
    };
    document.body.classList.remove('modal-open');
};


//handling error and success validation
// TODO: cleanup feedback styling, it is in two places at least
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



//email validation
const isValidEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
};

// Main validation function 
const validateInputs = () => {
    const nameValue = inputName.value.trim();
    const emailValue = email.value.trim();
    const mailContentValue = mailContent.value.trim();
    const phoneValue = phone.value.trim();

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

    if (mailContentValue == "") {
        setError(mailContent, "Please entere a message");
   
    } else {
        setSuccess(mailContent);
    }

    if (nameValue == "" || emailValue == "" || !isValidEmail(emailValue) || mailContentValue == ""){
        return false;
    }

    //if validation went through, send email
    sendEmail();
   
};


// setting  feedback styling for form inputs
// TODO: restructure to avoid code repetition

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

mailContent.addEventListener("change", () => {
    const parent = mailContent.parentElement;
    const sibling = parent.querySelector(".label");
    if (mailContent.value !== "") {
        
        sibling.classList.add("active");
    } else {
        sibling.classList.remove('active');
    }
});


// toggle mobile menu


const navToggle = document.querySelector('.nav__toggle');


navToggle.addEventListener('click', () => { 
    document.body.classList.toggle('nav-open');
})


//  skills slider

const radioBtn = document.querySelectorAll(".radio-btn");
const Title = document.querySelectorAll(".slider__title-item");
const languages = document.getElementById("languages");
const frameworks = document.getElementById("frameworks");
const tools = document.getElementById("tools");
const other = document.getElementById("other");
const radio1 = document.getElementById("radio1");


document.getElementById("radio1").checked = true;
let counter = 1;

const changeTitle = () => {
    Title.forEach((title) => title.classList.remove("active"));
    if (document.getElementById("radio" + counter).id == "radio1") {
        languages.classList.add("active");
    } else if (document.getElementById("radio" + counter).id == "radio2") {
        frameworks.classList.add("active");
    } else if (document.getElementById("radio" + counter).id == "radio3") {
        tools.classList.add("active");
    } else if (document.getElementById("radio" + counter).id == "radio4") {
        other.classList.add("active");
    }
}
    
  const sliderInteralFunction = () => {

    document.getElementById("radio" + counter).checked = true;
    changeTitle();
    counter++;
    if (counter > 4) {
        counter = 1;
    }

};
   let myTimer = setInterval(sliderInteralFunction, 5000);
    sliderInteralFunction()



const radioManualControl = (e) => {
    const target = e.target.id;
    if (target === 'radio1') {
        counter = 1;
    } else if (target === 'radio2') {
        counter = 2;
    } else if (target === 'radio3') {
        counter = 3;
    } else counter = 4;
    changeTitle();

    
}

radioBtn.forEach(btn => btn.addEventListener('click', radioManualControl));

const titleManualControl = (e) => {
    const target = e.target.id;
    if (target === 'languages') {
        counter = 1;
    } else if (target === 'frameworks') {
        counter = 2;
    } else if (target === 'tools') {
        counter = 3;
    } else counter = 4;
    changeTitle();
    clearInterval(myTimer)
    myTimer = setInterval(sliderInteralFunction, 5000);

    sliderInteralFunction()

}

Title.forEach(title => title.addEventListener('click', titleManualControl));
