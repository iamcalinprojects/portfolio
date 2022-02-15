/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Setting the error message when username is too short 


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;            
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
  
 // Error message when password is too short
}
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;            
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

// Confirm Password match 
const passw = document.getElementById("signupPassword");
const confirmpassw = document.getElementById("confirmPassword");

function checkPassword(){

    if(passw.value != confirmpassw.value) {
        confirmpassw.setCustomValidity("Passwords didn't match"); 
        
    } else {
        confirmpassw.setCustomValidity("");
    }
}
passw.onchange= checkPassword;
confirmpassw.onkeyup= checkPassword;


//Login & Sign up 

document.addEventListener('DOMContentLoaded', () =>{
    const container1 = document.querySelector("#login");
    const container2 = document.querySelector("#createAccount");

// add a click event when clicking on linkCreateAccount and on link Already have and account

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        container1.classList.add('form--hidden');
        container2.classList.remove('form--hidden');
    });

    document.querySelector('#linkLogin').addEventListener('click', e =>{
        e.preventDefault();
        container1.classList.remove('form--hidden');
        container2.classList.add('form--hidden');
    });
   


// setFormMessage(loginForm, "success", "You're logged in!");

container1.addEventListener("submit", e =>{
    e.preventDefault();

    //Perform your Fetch login

    setFormMessage(container1, "error", "Invalid username/password combination");
});

document.querySelectorAll(".form__input").forEach(inputElement =>{
    inputElement.addEventListener("blur", e => {
        if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
            setInputError(inputElement, "Username must be at least 5 characters in length")
        }
    });
    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
})
    document.querySelectorAll(".form__input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Password must be at least 5 characters")
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    })

});

//Pop up with JS
document.addEventListener('DOMContentLoaded', () =>{
    const modalContent1 = document.querySelector("#project2");

    document.getElementById("clickpopup").addEventListener('click', () =>{
         modalContent1.classList.add('active');
       
    });
});


