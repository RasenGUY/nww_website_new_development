// main js for the new new world website


// menu-mobile-animation
function animateMenu() {
    
    var links = document.querySelector(".wrapper-links-bottom");
    var navBtm = document.querySelector("nav.mobile-bottom");
    
    // toggle class
    links.classList.toggle("links-reveal");

    // remove attributes
    navBtm.style.removeProperty("box-shadow");

    // note - remove background color and filter from :after

}