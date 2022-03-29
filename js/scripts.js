window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = () =>{
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
    responsiveNavItems.map((responsiveNavItem) =>{
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Setting the error message when username is too short 


setFormMessage = (formElement, type, message) =>{
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;            
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

setInputError = (inputElement, message) =>{
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
clearInputError = (inputElement) =>{
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
  
 // Error message when password is too short
}
setFormMessage = (formElement, type, message) =>{
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;            
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

setInputError = (inputElement, message) =>{
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
clearInputError = (inputElement) =>{
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

// Confirm Password match 
const passw = document.getElementById("signupPassword");
const confirmpassw = document.getElementById("confirmPassword");

checkPassword = () =>{

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
   


// Check if Username and Password matches of current users
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
getInfo =() => {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i = 0; i < objPeople.length; i++) {
        //check if user input matches and password of current user
        if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in")
            //stop the function if this if found to be true
            return
        }    
         // console.log("incorrect username or password")
    setFormMessage(container1, "error", "Invalid username/password combination");    
    }
    
};

container1.addEventListener("submit", (e) =>{
    e.preventDefault();

    //Perform your Fetch login
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

//Google maps API
// Initialize and add the map
initMap = () =>{
    // The location of Mount Everest
    const everest = { lat:27.986065, lng: 86.922623 };
    // The map, centered at Mount Everest
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: everest,
    });
    // The marker, positioned at Everest
    const marker = new google.maps.Marker({
      position: everest,
      map: map,
    });
  }
//To do list
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const ul = document.querySelector(".wrapper-todo ul");
const li = document.getElementsByClassName("listTodo");
const span = document.getElementsByClassName("list")
const clearAll = document.querySelector('.footer1 button')


inputBox.onkeyup = () =>{
    let userData = inputBox.value; //getting user entered value
    if(userData.trim()!= 0){//if user value aren't only spaces
        addBtn.classList.add("active"); //active the add button
    } else {addBtn.classList.remove("active"); //unactive the add button

    }
};

var listFunction = ()=>{
    const list = document.createElement("li");
    list.appendChild(document.createTextNode(inputBox.value));
    ul.appendChild(list);
    inputBox.value = "";




    const span1 = document.createElement('span');
    span1.classList.add('span-delete');
    span1.innerHTML = '<i class="fas fa-trash"></i>';
    list.appendChild(span1);    
    
    //Delete a task
    span1.addEventListener('click', ()=>{
        ul.removeChild(list);
        
        
    });


    const spanEdit = document.createElement('span');
    spanEdit.classList.add('span-edit');
    spanEdit.innerHTML = '<i class="fas fa-check"></i>';
    spanEdit.classList.add('edit')
    list.appendChild(spanEdit);    

  
    spanEdit.addEventListener('click', ()=>{
        list.classList.toggle('done')              
    });

    clearAll.addEventListener("click",()=>{
        list.remove();    
    });
   
}
//Prevent empty submit 

inputLength = () =>{
    return inputBox.value.length;
}


addListAfterclick = ()=>{
    if(inputLength() > 0) {
        listFunction();
    }
}

addBtn.addEventListener('click', addListAfterclick);

addListAfterKeypress = (e) =>{
    if(inputLength() > 0 && e.which === 13){
        listFunction();
    }
}

inputBox.addEventListener("keypress",addListAfterKeypress);

// BMI Calculator

bmi = ()=> {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const bmi = weight/(height*height);
    const calculatedBmi = document.getElementById("bmi_index")
    calculatedBmi.textContent = bmi.toFixed(2);
}

const buttonBmi = document.getElementById("btnBmi");
buttonBmi.addEventListener("click", ()=>{
        bmi()

})


document.getElementById("height").forEach(inputElement =>{
    inputElement.addEventListener("blur", e => {
        if(e.target.id === "height" && e.target.value.length > 0 && e.target.value.length < 5) {
            setInputError(inputElement, "Password must be at least 5 characters")
        }
    });

});
