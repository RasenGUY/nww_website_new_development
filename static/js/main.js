// main js for the new new world website
import * as f from "./functions.js"; 

// menu-mobile-animation
const animateMenu = document.querySelector("#nav-mobile .hamburger");
animateMenu.addEventListener("click", () => {

    // variables to animate 
    const navBtm = document.querySelector("nav#nav-mobile");
    const linksUl = document.querySelector("ul.nav-links-bottom");
    const burger = document.querySelector(".hamburger .burger");
    const burgerTop = document.querySelector(".burger-top");
    const burgerMiddle = document.querySelector(".burger-middle");
    const burgerBottom = document.querySelector(".burger-bottom");
    
    // toggle class
    linksUl.classList.toggle("animate");
    burger.classList.toggle("animate-burger-border");
    burgerTop.classList.toggle("animate-top");
    burgerMiddle.classList.toggle("hide");
    burgerBottom.classList.toggle("animate-bottom");
    navBtm.classList.toggle("animate");
    

    // remove attributes
    // navBtm.style.removeProperty("box-shadow");

    // toggle psuedoattributes
    const htmlEl = "nav#nav-mobile-links";
    const cssRule = "transform: translateY(-5.5rem);"
    const pseudo = "::before"
    f.togglePseudo(htmlEl, pseudo, cssRule);
});

// queire section one index page 
// const indexSOneMax = f.medQueries(`1349px`, ">"); 
const indexSOneMin = f.medQueries(`1350px`, "<"); 
indexSOneMin.addEventListener("change", f.queriesIndex);
// indexSOneMax.addEventListener("change", f.queriesIndex);