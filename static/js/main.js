// main js for the new new world website
import * as f from "./functions.js";
import * as g from "./gmap.js";
import * as c from "./carousel.js";
import * as gal from "./gallery.js";

window.onload = (()=>{

    // intilialize map only if index page
    if (window.location.pathname === "/"){
        let map; 
        g.initMap(map);
    }

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

    // queries section one index page
    const indexSOneQ1 = f.medQueries(`412px`, "<"); 
    indexSOneQ1.addEventListener("change", f.queriesIndex);
    
    // initialize carousel instance for each carousel on the site
    const
    carousels = document.querySelectorAll(".carousel-wrapper"); // all carousels
    carousels.forEach( (carousel) => {
        let carou = new c.Carousel(carousel);
        carou.initCarousel();
    });

    // initialize gallery (missing some code here)
    const galWrapper = document.querySelectorAll("#gallery-s-gallery .wrapper");
    const imgSz = {
        "square" : "450",
        "rectV" : "450/600",
        "rectH" : "450/300"
    }; 
    let gallery = new gal.Gallery(galWrapper, 90, 3, "https://picsum.photos/", imgSz);
})()
