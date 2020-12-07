// main js for the new new world website

// menu-mobile-animation
function animateMenu() {

    // variables to animate 
    var navBtm = document.querySelector("nav#nav-mobile");
    var linksUl = document.querySelector("ul.nav-links-bottom");
    var burger = document.querySelector(".hamburger .burger");
    var burgerTop = document.querySelector(".burger-top");
    var burgerMiddle = document.querySelector(".burger-middle");
    var burgerBottom = document.querySelector(".burger-bottom");
    
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
    const cssRule = "nav#nav-mobile-links::before{transform: translateY(-5.5rem);}";
    animateBefore(cssRule);
}

const animateBefore = (cssRule) => {
     
    // retrieve all childnodes 
    var children = document.querySelector("head").childNodes;

    // toggle the style  
    var ruleExists = false;
    var childIndex = null;

    // remove existing style
    children.forEach((child, index) =>{
        console.log(child['innerHTML']);
        if (child['innerHTML'] == cssRule){
            ruleExists = true; 
            childIndex = index;
        } 
    });

    if (ruleExists == true){

        // remove child
        document.querySelector("head").removeChild(children[childIndex]);
        console.log("removed child");

    } 
    else {

        // add child
        var el = document.createElement("style");
        el.innerHTML = cssRule;
        document.querySelector("head").appendChild(el);
    }; 

    return 0;
} 