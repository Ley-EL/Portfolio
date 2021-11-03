const webDev = document.querySelector('p.web-dev');
const androidDev = document.querySelector('p.android-dev');
const gameDev = document.querySelector('p.game-dev');
const hamburgerMenu = document.querySelector('nav > i.fas.fa-bars');
const home = document.querySelector('ul li a.home');
const profile = document.querySelector('ul li a.profile');
const skills = document.querySelector('ul li a.skills');
const certificates = document.querySelector('ul li a.certificates');
// const projects = document.querySelector('ul li a.projects');

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

function MenuEventClick() {
    // add icon menu an animation on click
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.style.animation = "hamburgerMenuAnim 5s linear";
        hamburgerMenu.style.animationFillMode = "forwards"
        var showMenuInterval = setInterval(ShowMenu, 100);
        MenuAnimationEnd(showMenuInterval);
    })

}

function CloseMenuEventClick(closeMenu) {
    // add animation for close menu on click
    closeMenu.addEventListener('click', () => {
        hamburgerMenu.style.animation = "closeMenuAnim 5s linear";
        hamburgerMenu.style.animationFillMode = "forwards"
        var hideMenuInterval = setInterval(HideMenu, 100);

        CloseMenuAnimationEnd(closeMenu, hideMenuInterval);
    })
}

function CloseMenuAnimationEnd(closeMenu, hideMenuInterval) {
    closeMenu.addEventListener("animationend", () => {
        // change close icon to menu icon
        hamburgerMenu.classList.remove("fa-times");
        hamburgerMenu.classList.add("fa-bars");

        clearInterval(hideMenuInterval);

        MenuEventClick();
    })
}

function MenuAnimationEnd(showMenuInterval) {
    hamburgerMenu.addEventListener("animationend", () => {
        // change menu icon to close icon
        hamburgerMenu.classList.remove("fa-bars");
        hamburgerMenu.classList.add("fa-times");

        clearInterval(showMenuInterval);

        // get new icon class name
        var closeMenu = document.querySelector('i.fa-times');

        CloseMenuEventClick(closeMenu);
    })
}

MenuEventClick();

// retrieve nav item position
const homePos = home.getBoundingClientRect();
const profilePos = profile.getBoundingClientRect();
const skillsPos = skills.getBoundingClientRect();
const certificatesPos = certificates.getBoundingClientRect();

function ShowMenu() {
    // get current icon menu position
    var menuPos = hamburgerMenu.getBoundingClientRect();

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

