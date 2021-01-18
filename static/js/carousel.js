// --------------- carousell -------------------
var 
itemClassName = "member carousel-photo", 
items = document.getElementsByClassName(itemClassName), 
totalItems = items.length, 
slide = 0, 
moving = true;


// ------------ carousel functions ------------------
// initialize carousel photo classes
function setCarouInitialClass(){
    // target current previous, current and next items
    // assuming there are at least 3 items
    
    items[totalItems - 1].classList.add("prev"); 
    items[0].classList.add("active");
    items[1].classList.add("next");
};

// add click events to the next and previous buttons 
function setCarouListeners(){
    
    const 
    
    next = document.querySelectorAll(".carousel-btn--next")[0], 
    prev = document.querySelectorAll(".carousel-btn--prev")[0];

    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
          
}

// move items right
function moveNext(){
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
function movePrev(){
       
       // check if moving 
       if (!moving){
   
        // if it is the last slide, reset to 0, else +1
        if (slide === 0){
            slide = (totalItems - 1); 
        } else {
            slide--;
        }
   
        // move carousel to updated slide
        moveCarouselTo(slide);

           
           
       }
}

// disable interaction 
function disableInteraction(){

    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)
    
    moving = true;  
    
    // setTimeout runs its function once after the given time
    setTimeout(() => {
        moving = false
    }, 500);

}

// main carousel function 
function moveCarouselTo(slide) {
    
    // if slide not moving then allow interaction
    if (!moving){

        // disable interaction for 5 seconds
        disableInteraction()

        // update old adjacent slides with new ones
        var 
        newPrevious = slide - 1,
        newNext = slide + 1, 
        oldPrevious = slide - 2,
        oldNext = slide + 2; 
        
        // test if carousel has more then 3 items
        if ((totalItems - 1) > 2) {
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
                oldNext = (slide + 1);
            } else if (slide === (totalItems - 1)) {
                newPrevious = (slide - 1);
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
function initCarousel(){

    setCarouInitialClass();
    setCarouListeners();
    
    // set moving to false
    moving = false;
}

// initialize carousel 
initCarousel();
