// all js functions used in the newworld site

// general 
// function for toggling pseudo elements on and off
export function togglePseudo(htmlEl, pseudo, cssRule){ //function for animating pseudo-elements 
     
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

// function for animating menu
export function animateMenu(){

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

// function for doing media queries on site 
export function medQueries(width, minMax){
    
    let query = null; 
    // max or min
    if (minMax == ">"){ // if min then create min-width query
        query = `(min-width: ${width})`;
    }
    else if (minMax == "<"){ // if min then create max-width query
        query = `(max-width: ${width})`;
    }

    // initialize and listen to changes on page
    return window.matchMedia(query);
};

// queries for index page
export function queriesIndex(window){
    
    // select elements
    // section one
    const sOneTopRCir = document.querySelector("#index-s-one .shapes .circles .wrapper > div:nth-child(1)");

    if (window.matches){ // section one 
        
    } else {

    }
    return;
};


// ------------ carousel functions ------------------
// initialize carousel photo classes
export function setCarouInitialClass(){
    // target current previous, current and next items
    // assuming there are at least 3 items
    
    items[totalItems - 1].classList.add("prev"); 
    items[0].classList.add("active");
    items[1].classList.add("next");
};

// add click events to the next and previous buttons 
export function setCarouListeners(){
    
    const 
    
    next = document.querySelectorAll(".carousel-btn--next")[0], 
    prev = document.querySelectorAll(".carousel-btn--prev")[0];

    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
          
}

// move items right
export function moveNext(){
    
    // check if moving 
    if (!moving){

        // if it is the last slide, reset to 0, else +1
        if (slide === (totalItems - 1 )){
            slide = 0; 
        } else {
            slide++;
        }

        // move carousel to updated slide
        moveCarouselTo(slide);
    }
};

// move items left
export function movePrev(){
       
       // check if moving 
       if (!moving){
   
           // if it is the last slide, reset to 0, else +1
           if (slide === 0 ){
               slide = 0; 
           } else {
               slide--;
           }
   
           // move carousel to updated slide
           moveCarouselTo(slide);
       }
}

// disable interaction 
export function disableInteraction(){

    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)
    
    moving = true;  
    
    // setTimeout runs its function once after the given time
    setTimeout(() => {
        moving = false
    }, 500);

}

// main carousel function 
export function moveCarouselTo(slide) {
    
    // if slide not moving then allow interaction
    if (!moving){

        // disable interaction for 5 seconds
        disableInteraction()

        // update old adject slides with new ones
        const 
        newPrevious = slide - 1,
        newNext = slide + 1, 
        oldPrevious = slide - 2,
        oldNext = slide + 2; 

        // test if carousel has more then 3 items
        if ((totalItems - 1) > 3) {
            
            // Checks and updates if the new slides are out of bounds
            if (newPrevious <= 0) {
                oldPrevious = (totalItems - 1);
            } else if (newNext >= (totalItems - 1)) {
                oldNext = 0;
            }

            // checks and updates if the slide is at the beginning/end
            if (slide === 0){
                newPrevious = (totalItems - 1);
                oldPrevious = (totalItems - 2);
                oldNext = 0;
            } else if (slide === (totalItems - 1)) {
                newPrevious = (slide -1);
                newNext = 0;
                oldNext = 1;
            }

            // reset old next/prev elements to default classes
            items[oldPrevious].className = itemClassName;
            items[oldNext].className = itemClassName;

            // add new classes
            items[newPrevious].className = itemClassName + " prev";
            items[slide].className = itemClassName + " active";
            items[newNext].className = itemClassName + " next";
        };  
    }
}

// initialize
export function initCarousel(){

    setCarouInitialClass();
    setCarouListeners();
    
    // set moving to false
    moving = false;
}
