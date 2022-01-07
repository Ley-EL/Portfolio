const webDev = document.querySelector('p.web-dev');
const androidDev = document.querySelector('p.android-dev');
const gameDev = document.querySelector('p.game-dev');
const hamburgerMenu = document.querySelector('nav > i.fas.fa-bars');
const home = document.querySelector('ul li a.home');
const profile = document.querySelector('ul li a.profile');
const skills = document.querySelector('ul li a.skills');
const certificates = document.querySelector('ul li a.certificates');
const headerContainer = document.querySelector('section.top-page div.brief-presentation');
const navContainer = document.querySelector('div.nav')

webDev.addEventListener('animationend', () => {
    // hide web dev text
    webDev.style.display = "none"

    // show android dev text
    androidDev.style.display = "block"
});

androidDev.addEventListener('animationend', () => {
    // hide android dev text
    androidDev.style.display = "none"

    // show game dev text
    gameDev.style.display = "block"
})

gameDev.addEventListener('animationend', () => {
    // hide game dev text
    gameDev.style.display = "none"

    // show web dev text
    webDev.style.display = "block"
})

// add icon menu an animation on click
hamburgerMenu.addEventListener('click', () => {
    // if the icon is the hmaburger menu icon
    if (hamburgerMenu.classList.contains("fa-bars")) {

        // add animation to it
        hamburgerMenu.style.animation = "hamburgerMenuAnim 5s linear";
        hamburgerMenu.style.animationFillMode = "forwards"

        // if we are on mobile
        if (mediaQuery.matches) {

            // change menu icon animation duration
            hamburgerMenu.style.animationDuration = "3s";

            // disable header container
            headerContainer.style.display = "none";

            // enable the nav container
            navContainer.style.display = "block"

            ShowMenu();
        }
        else {
            var showMenuInterval = setInterval(ShowMenu, 100);
        }

    } // if the icon is the close icon
    else if (hamburgerMenu.classList.contains("fa-times")) {
        // add animation to it
        hamburgerMenu.style.animation = "closeMenuAnim 5s linear";
        hamburgerMenu.style.animationFillMode = "forwards"
        
        // if we are on mobile
        if (mediaQuery.matches) {

            // change menu icon animation duration
            hamburgerMenu.style.animationDuration = "3s";

            HideMenu();
        } 
        else {
            var hideMenuInterval = setInterval(HideMenu, 100);
        }
    }
})

// check when animation on the icon menu is done
hamburgerMenu.addEventListener("animationend", () => {
    // if the icon is the hamburger menu icon
    if (hamburgerMenu.classList.contains("fa-bars")) {

        // change hamburger menu icon to close icon
        hamburgerMenu.classList.remove("fa-bars");
        hamburgerMenu.classList.add("fa-times");
        
    } // if the icon is the close icon
    else if (hamburgerMenu.classList.contains("fa-times")) {

        // change close icon to hamburger menu icon
        hamburgerMenu.classList.remove("fa-times");
        hamburgerMenu.classList.add("fa-bars");
        
        // if we are on mobile
        if (mediaQuery.matches) {
            // enable header container
            headerContainer.style.display = "block"

            // disable the nav container
            navContainer.style.display = "none"
        }
    }
})

// retrieve nav item position
const homePos = home.getBoundingClientRect();
const profilePos = profile.getBoundingClientRect();
const skillsPos = skills.getBoundingClientRect();
const certificatesPos = certificates.getBoundingClientRect();

function ShowMenu() {
    // get current icon menu position
    var menuPos = hamburgerMenu.getBoundingClientRect();
    console.log(menuPos)

    // show menu items
    if (menuPos.left < homePos.left - 5) {
        home.style.visibility = "visible"
    }

    if (menuPos.left < profilePos.left - 5) {
        profile.style.visibility = "visible"
    }

    if (menuPos.left < skillsPos.left - 5) {
        skills.style.visibility = "visible"
    }

    if (menuPos.left < certificatesPos.left - 5) {
        certificates.style.visibility = "visible"
    }
}

function HideMenu() {
    // get current icon menu position
    var menuPos = hamburgerMenu.getBoundingClientRect();

    // hide menu items
    if (menuPos.right > homePos.right + 5) {
        home.style.visibility = "hidden"
    }

    if (menuPos.right > profilePos.right + 5) {
        profile.style.visibility = "hidden"
    }

    if (menuPos.right > skillsPos.right + 5) {
        skills.style.visibility = "hidden"
    }

    if (menuPos.right > certificatesPos.right + 5) {
        certificates.style.visibility = "hidden"
    }
}

// Responsive Design

const mediaQuery = window.matchMedia("(max-width: 550px)");

if (mediaQuery.matches) {

    function ShowMenu() {
        setTimeout(() => {
            // make profile visible
            profile.style.visibility = "visible";
            // make skills visible
            skills.style.visibility = "visible"
        }, 1000);

        setTimeout(() => {
            // make certificates visible
            certificates.style.visibility = "visible"
            // make home visible
            home.style.visibility = "visible";
        }, 2000);


    }

    function HideMenu() {
        setTimeout(() => {
            // make home hidden
            home.style.visibility = "hidden";

            // make certificates hidden
            certificates.style.visibility = "hidden"
        }, 1000);

        setTimeout(() => {
            // make profile hidden
            profile.style.visibility = "hidden";
            // make skills hidden
            skills.style.visibility = "hidden"

        }, 2000);

    }
}

