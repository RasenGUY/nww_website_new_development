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
    var htmlEl = "nav#nav-mobile-links";
    var cssRule = "transform: translateY(-5.5rem);"
    var pseudo = "::before"
    togglePseudo(htmlEl, pseudo, cssRule);
};

var togglePseudo = (htmlEl, pseudo, cssRule) => { //function for animating pseudo-elements 
     
    // retrieve all childnodes 
    var children = document.querySelector("head").childNodes;

    // toggle the style  
    var ruleExists = false;
    var childIndex = null;
    var pseudoEl = htmlEl + pseudo + "{"+ cssRule + "}"

    // remove existing style
    children.forEach((child, index) =>{
        console.log(child['innerHTML']);
        if (child['innerHTML'] == pseudoEl){
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
        el.innerHTML = pseudoEl;
        console.log(el);
        document.querySelector("head").appendChild(el);
    }; 

    return 0;
};

// function for doing media queries on site 
var Medqueries = (queryFunc, width, minMax)=>{
    
    // max or min
    if minmax 
    // initialize and listen to changes of page
    let medQuery = window.mathcMedia(width);

    queryFunc(query);
    query.addlistener()
};


// responsive functions for sections of pages of site 
const responsiveHome = () => {

};  
