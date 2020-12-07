// main js for the new new world website

// menu-mobile-animation
function animateMenu() {
    
    // var navBtm = document.querySelector("nav.mobile-bottom");
    var linksUl = document.querySelector("ul.nav-links-bottom");
    var burger = document.querySelector(".hamburger .burger");
    var burgerTop = document.querySelector(".burger-top");
    var burgerMiddle = document.querySelector(".burger-middle");
    var burgerBottom = document.querySelector(".burger-bottom");
    
    // toggle class
    // links.classList.toggle("links-reveal");
    // linksUl.style.display = "none";
    // linksUl.classList.toggle("l-flex");
    // linksUl.classList.toggle("col");
    linksUl.classList.toggle("animate");
    burger.classList.toggle("animate-burger-border");
    burgerTop.classList.toggle("animate-top");
    burgerMiddle.classList.toggle("hide");
    burgerBottom.classList.toggle("animate-bottom");

    // remove attributes
    // navBtm.style.removeProperty("box-shadow");

}