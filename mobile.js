/*
    This java script page is used specifically for mobile menu on the about and resume page.

    Author: Ben Orrvick
    Begin Date: Project began 08/02/2021
    Last Updated: 08/19/2021
*/

//for mobile header
const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navTabs = document.getElementsByClassName('navTabs')[0];

//event listener for mobile menu and function that toggles the class
toggleButton.addEventListener('click', () => {
    navTabs.classList.toggle('active')
});
