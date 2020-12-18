// main js for the new new world website
import {togglePseudo, medQueries} from "./functions.js"; 

// menu-mobile-animation
const animateMenu = document.querySelector("#nav-mobile .hamburger");
animateMenu.addEventListener("click", () =>{

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
    togglePseudo(htmlEl, pseudo, cssRule);
});


// responsive functions for sections of pages of site 
// const responsiveHome = () => { 

    // s-one (section one)
    // select items
    // const header = document.querySelector("#index-s-one > :nth-child(2)"); // textbox header

    // change s-one items attributes give query
//     if () {

//     }
    
// };  

// initialize queries
// f.medQueries().addlistener();
