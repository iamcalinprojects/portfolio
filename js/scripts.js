/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// maps
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
   

// Check if Username and Password matches
const linkInfo = document.getElementById('getInfo');
linkInfo.addEventListener("click", getInfo);

var objPeople = [
    {//Object@ 0 index
        username: "Uncle",
        password: "sam"
    },
    {//Object@ 1 index
        username: "Cuda",
        password: "core"
    },
    {//Object@ 2 index
        username: "Mark",
        password: "cody"
    }
];
function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i = 0; i < objPeople.length; i++) {
        //check if user input matches and password of current user
        if(username == objPeople[i].username && password ==objPeople[i].password) {
            console.log(username + " is logged in")
            //stop the function if this if found to be true
            return
        }    
         // console.log("incorrect username or password")
    setFormMessage(container1, "error", "Invalid username/password combination");    
    }
   

    // inputElement.addEventListener("input", e => {
    //     clearInputError(inputElement);
    // });
    
    
};

// Register a new user in our JS

// setFormMessage(loginForm, "success", "You're logged in!");

container1.addEventListener("submit", e =>{
    e.preventDefault();

    //Perform your Fetch login

    // setFormMessage(container1, "error", "Invalid username/password combination");
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

const imagepop = document.getElementById('clickpopup');
const containerPopup = document.querySelector('.containerpop');
const overlay = document.getElementById('overlay');
const btnclose = document.querySelector('.btn-close');


imagepop.addEventListener('click', ()=>{
    containerPopup.classList.add('show');
    overlay.classList.add('active');

  });

overlay.addEventListener('click', ()=>{
    containerPopup.classList.remove('show');
    overlay.classList.remove('active');

  });
btnclose.addEventListener('click', ()=>{
    containerPopup.classList.remove('show');
    overlay.classList.remove('active');

  });
  
// add API's

// Maps api

// const map = document.createElement('map');
// map.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9kpyfKLmUW2WvMa3N9SlbOI3scCNu-4U&callback=initMap";

// window.initMap = function() {
    
// };


// erroe tryal
// var map = document.createElement('map');
// map.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
// map.async = true;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
// Create the script tag, set the appropriate attributes

// var map = document.createElement('map');
// map.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC9kpyfKLmUW2WvMa3N9SlbOI3scCNu-4U&callback=initMap';
// map.async = true;

// function initMap(){
//     var mapProp = {lat:37.788890, lng: -122.3981004};
//     let map = new google.maps.Map(document.getElementById('map'),{zoom:5, center: mapProp});
//     let marker = new google.maps.Marker({mapProp, map: map})}


// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   }


// Attach your callback function to the `window` object

// window.initMap = function() {
    
//   // JS API is loaded and available
// };

// Append the 'script' element to 'head'
// document.head.appendChild(script);