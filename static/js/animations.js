// ----------------- animations -----------------
export function Animation (baseSet) {
    
    this.baseSet = baseSet, // main settings

    // animation function
    this.createAnim = (obj) => {
        // find out what tween to create first -> set tween type    
        // add scroll trigger
        this.baseSet.scrollTrigger.trigger = obj.sel; 
        
        if (obj.type === "to"){ // create to tween

            if (obj.baseSet != null){
                                
                // create settings and initialize animation 
                gsap.to(obj.sel, Object.assign(obj.set, Object.assign(obj.baseSet, this.baseSet)));
            
            } else {

                // create settings and initialize animation 
                gsap.to(obj.sel, Object.assign(obj.set, this.baseSet));
            }
            
            
        }
        else if (obj.type === "fromTo"){ // create fromTo tween

            if (obj.baseSet != null){
                
                // create settings and intialize animation
                gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, Object.assign(obj.baseSet, this.baseSet)));
            
            } else {
    
                // create settings and initialize animation 
                gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, this.baseSet));
            }
            
            
        }
        else if (obj.type === "from"){ // create from tween

            if (obj.baseSet != null){

                // create settings and initialize animation  
                gsap.from(obj.sel, Object.assign(obj.set, Object.assign(obj.baseSet, this.baseSet)));
                
            
            } else {
    
                // create settings and initialize animation  
                gsap.from(obj.sel, Object.assign(obj.set, this.baseSet));

            }

        }
        else if (obj.type === "scroll"){ // create ScrollTo tween
            
            // scroll type doesn't take any base settings
            // create scrollTo instance, add event listener to trigger it
            // you have to set scrollTo in the className if you don't put href 
            // window scroll by default            
            // link item to be clicked

            const navBtn = document.querySelector(obj.sel);

            if (navBtn.dataset.href != undefined){ // if there is a reference link 
                // set scroll target

                if (obj.scrollSet.to == null){ // create an object for scrollTo settings
                    obj.scrollSet.to = {};
                }

                obj.scrollSet.to.y = navBtn.dataset.href;
            }

            if (obj.scrollSet.start != null){
                 
                // listen to nav click event 
                navBtn.addEventListener('click', ()=> {
                    gsap.to(obj.scrollSet.start, Object.assign({scrollTo: obj.scrollSet.to}, obj.scrollSet.base));
                })
                
            } else {
                
                // listen to nav click event 
                navBtn.addEventListener("click", ()=>{
                    console.log(obj.scrollSet.to)
                    console.log(obj.scrollSet.base)
                    gsap.to(window, Object.assign({scrollTo: obj.scrollSet.to}, obj.scrollSet.base));
                })
            }
        
        }

    };
    
    this.animInit = (els, sel) => { // initiates animations on websit, selects targets create animation settings and tween instances
        
        var animN = 0; 
        // get elements class names in list and split animation settings and type from the list into arrays of settings and animation type
        els.forEach((el) => {
            
            // transform class selector into settings obj for animation
            (()=>{
                return new Promise((resolve) => {

                    let animObj = {
                        set: {},
                        baseSet: null,
                        scrollSet: {
                            start: null,
                            base: null,
                            to: null, 
                        }
                    }; 
                    
                    // create animation selector for gsap
                    el.className += " anim-" + String(animN);
                    animObj.sel = ".anim-" + String(animN); 
                    animN++;

                    for (let classN of el.classList.entries()){
                        
                        if (classN[1].includes("type:")){ // find type and direction-> always string
                            animObj.type = classN[1].split("|").find(val => val.includes("type")).split(":")[1];
                        } 
                        if (classN[1].includes("scrollStart:")){ // find scrollStart for scroll type animations
                            
                            animObj.scrollSet = {}; 
                            animObj.scrollSet.start = classN[1].split(":").find(val => val.includes("scrollStart")).split(":")[1];

                        }
                        if (classN[1].includes("set|")){
                            
                            // create set then add to object 
                            for (let val  of classN[1].replace("set|", "").split("|")){
                                animObj.set[val.split(':')[0]] = val.split(':')[1];  
                            };
                                        
                        } 
                        if (classN[1].includes("setFrom|")){
                            
                            animObj.set.from = {};

                            // create set then add to object 
                            for (let val  of classN[1].replace("setFrom|", "").split("|")){
                                animObj.set.from[val.split(':')[0]] = (val.split(':')[1]);  
                            };
                            
                        } 
                        if (classN[1].includes("setTo|")){
                            
                            animObj.set.to = {};

                            // create set then add to object 
                            for (let val  of classN[1].replace("setTo|", "").split("|")){
                                animObj.set.to[val.split(':')[0]] = val.split(':')[1];  
                            };
                        } 
                        if (classN[1].includes("baseSet|")){
                            
                            animObj.baseSet = {};

                            // create set then add to object 
                            for (let val  of classN[1].replace("baseSet|", "").split("|")){
                                animObj.baseSet[val.split(':')[0]] = val.split(':')[1];  
                            };
                        } 
                        if (classN[1].includes("scrollBase|")){
                            
                            // create settings for animation 
                            animObj.scrollSet.base = {};

                            // create set then add to object 
                            for (let val  of classN[1].replace("scrollBase|", "").split("|")){
                                animObj.scrollSet.base[val.split(':')[0]] = val.split(':')[1];  
                            };
                        } 
                        if (classN[1].includes("scrollTo|")){
                            
                            // create settings for animation 
                            animObj.scrollSet.to = {};

                            // create set then add to object 
                            for (let val  of classN[1].replace("scrollTo|", "").split("|")){
                                animObj.scrollSet.to[val.split(':')[0]] = val.split(':')[1];  
                            };
                        } 
                        

                        
                        else {
                            continue;
                        }    
                    }
                    resolve(animObj)
                })
            })().then(animObj => this.createAnim(animObj)) // create animation

        })

    }
}