// main js for the new new world website

// menu-mobile-animation
function animateMenu() {
    
    var links = document.querySelector(".wrapper-links-bottom");
    var linksUl = document.querySelector(".nav-links-bottom");
    var navBtm = document.querySelector("nav.mobile-bottom");
    var burger = document.querySelector(".hamburger");
    var burgerTop = document.querySelector(".burger-top");
    var burgerMiddle = document.querySelector(".burger-middle");
    var burgerBottom = document.querySelector(".burger-bottom");
    
    // toggle class
    links.classList.toggle("links-reveal");
    linksUl.classList.toggle("fade");
    burger.classList.toggle("animate-burger-border");
    burgerTop.classList.toggle("animate-top");
    burgerMiddle.classList.toggle("animate-middle");
    burgerBottom.classList.toggle("animate-bottom");

    // remove attributes
    navBtm.style.removeProperty("box-shadow");

}