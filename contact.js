/*
    This java script page is used specifically for the contact page and allows the user to send an email 
    as a form submited through email website. t
    Author: Ben Orrvick
    Begin Date: Project began 08/02/2021
    Last Updated: 08/19/2021
*/

//assign elements to objects for contact
const form = document.getElementById('form');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

//for mobile
//for mobile header
const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navTabs = document.getElementsByClassName('navTabs')[0];

//event listener for mobile menu and function that toggles the class
toggleButton.addEventListener('click', () => {
    navTabs.classList.toggle('active')
});


//checks for errors
form.addEventListener('submit', (e) => {
    // e.preventDefault();
    //if the check returns false dont submit
    if(!CheckInputs()){
        e.preventDefault();
    }
});

//recieves input values and checks them then calls function to change css
function CheckInputs(){
    //get values from inputs and gets rid of spaces
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    //used to check if form is valid. if by then end it doesnt equlat three then return false
    var score = 0;

    //CHECK EMAIL
    //checks if email is empty
    if(emailValue ===''){
        SetErrorFor(email,'Email can not be blank');
    }
    //checks if email is correct form
    else if(!IsEmail(emailValue)){
        SetErrorFor(email,'Email is not valid');
    }

    else{
        SetSuccessFor(email);
        score+=1;
    }

    //CHECK SUBJECT
    //checks if subject is empty
    if(subjectValue ===''){
        SetErrorFor(subject,'Subject can not be blank');
    }
    else{
        SetSuccessFor(subject);
        score+=1;
    }

    //CHECK MESSAGE
    //checks if subject is empty
    if(messageValue ===''){
        SetErrorFor(message,'Message can not be blank');
    }
    else{
        SetSuccessFor(message);
        score+=1;
    }

    if(score===3){
        return true;
    }

    else{
        return false;
    }

    
}

//this function displays the error message
function SetErrorFor(input, message){
    //this element is double nested
    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "formControl error";
}

function SetSuccessFor(input){
    const formControl = input.parentElement.parentElement;
    formControl.className = "formControl success";
}

//checks email format and returns if true.
//i got this function from stacked overflow to save myself the missery 
function IsEmail(email){
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}