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
export function medQueries(minMax, width){
    
    let query = null; 

    // max or min
    if (minMax === ">"){ // if min then create min-width query
        query = `(min-width: ${width})`;
    }
    else if (minMax === "<"){ // if min then create max-width query
        query = `(max-width: ${width})`;
    }
    // initialize and listen to changes on page
    return window.matchMedia(query);
};

// queries for index page
export function callQueries(window, callBack, reverse){

    // will execute callBack and reverseFunction on matched or unmatched window
    if (window.matches){ // section one 
        callBack(); 
    } 
    else {
        reverse(); 
    }
};

export function removeChilds(parent){
    console.log("removing children");
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

// mutationObserver -> creates instance of element observer and executes given callBack function -> returns the created instance
export function observeEl(el, config, callBack) {
    
    const observerCallB = (mutationList, observer) => { // check for changes in DOM el
        
        // loop trough mutationlist and call the callBackfunction  
        for (const mutation of mutationList){
            
            // call callback if child has been added or removed
            if (mutation.type === 'childList') {
                callBack();
            }
        }
    }
    
    return {config: config, el: el, inst: new MutationObserver(observerCallB)}; // create new observer obj instance 
}
