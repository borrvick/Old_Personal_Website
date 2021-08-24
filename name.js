/*
    This java script page is used specifically for the index page and allows the user to type their name or what ever they want 
    into the text input and it will display in the header. this also has function for mobile menu that toggles the class displaying 
    the mobile menu

    Author: Ben Orrvick
    Begin Date: Project began 08/02/2021
    Last Updated: 08/19/2021
*/

//for mobile header
const toggleButton = document.getElementsByClassName('toggleButton')[0]
const navTabs = document.getElementsByClassName('navTabs')[0]
//for changing text on screen
const firstName = document.getElementById("firstName");
const helloText = document.getElementById("helloText");


//event listener for mobile menu and function that toggles the class
toggleButton.addEventListener('click', () => {
    navTabs.classList.toggle('active')
})

//event listener for input box
firstName.addEventListener("input", changeText);

//assigns the text inputed to the html heading 
function changeText(){
helloText.innerHTML = "Hello " + firstName.value + ".";
}
