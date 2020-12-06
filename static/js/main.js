// main js for the new new world website

// menu-mobile-animation
function animateMenu() {
    
    // var links = document.querySelector(".wrapper-links-bottom");
    // var linksUl = document.querySelector(".nav-links-bottom");
    // var navBtm = document.querySelector("nav.mobile-bottom");
    var burger = document.querySelector(".hamburger .burger");
    var burgerTop = document.querySelector(".burger-top");
    var burgerMiddle = document.querySelector(".burger-middle");
    var burgerBottom = document.querySelector(".burger-bottom");
    
    // toggle class
    // links.classList.toggle("links-reveal");
    // linksUl.classList.toggle("fade");
    // burger.classList.toggle("content-justify-evenly");
    // burger.classList.toggle("content-justify-center");
    burger.classList.toggle("animate-burger-border");
    burgerTop.classList.toggle("animate-top");
    burgerMiddle.classList.toggle("hide");
    burgerBottom.classList.toggle("animate-bottom");

    // remove attributes
    navBtm.style.removeProperty("box-shadow");

}