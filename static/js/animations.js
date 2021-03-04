// ----------------- animations -----------------
export function Animation (baseSet) {
    
    this.baseSet = baseSet, // main settings

    // animation function
    this.createAnim = (obj) => {
        // creates gsap tween settings and initializes instances of these tweens //

        // automatically add trigger to scrollTrigger
        if (this.baseSet.scrollTrigger === undefined){ // add element as trigger if scrolltrigger is true
            this.baseSet.scrollTrigger = {}; 
        }
        this.baseSet.scrollTrigger.trigger = obj.sel; 
        
        if (obj.type === "to" || obj.type === "from"){ // create to tween

            console.log(obj.useBase)

            if (obj.useBase === false){ // use base settings set in main js

                if (obj.base !== null){ // update base settings if provided inline
                    
                    if (obj.hasTrigger === false ){ // use scroll trigger set in main js 

                        if (obj.scrollTrigger !== null ){ // update base.scrollTrigger if scrollTrigger is present 
                            
                            gsap.to(obj.sel, Object.assign(obj.set, Object.assign(Object.assign(this.baseSet, obj.base), obj.scrollTrigger))); 
                            
                        } else { // dont update scrollTrigger if it isn't present 
                            
                            gsap.to(obj.sel, Object.assign(obj.set, Object.assign(this.baseSet, obj.base))); 
                            
                        }
 
                    } else { // replace scrolTrigger object in base settings with scrollTrigger settings set inline
                        
                        // udate base settings and 
                        // change updated basesettings scrollTrigger to obj scrollTrigger
                        let updatedBase = Object.assign(this.baseSet, obj.base);
                        updatedBase.scrollTrigger = obj.scrollTrigger; 
                        
                        // create the gsap animation
                        gsap.to(obj.sel, updatedBase);
                        
                    }
                
                } else { // no update of baseSettings

                    if (obj.hasTrigger === false){ // use scrollTrigger settings from baseSettings
                        
                        gsap.to(obj.sel, Object.assign(this.baseSet, obj.set));

                    } else { // use scrollTrigger settings set inline 

                        // create settings and initialize animation 
                        gsap.to(obj.sel, Object.assign(Object.assign(this.baseSet, {scrollTrigger: obj.scrollTrigger}), obj.set));
                        
                    }
                }

            } else { // only use baseSettings set inlne 

                if (obj.hasTrigger === false){ // use scrollTrigger settings from baseSettings
                        
                    gsap.to(obj.sel, Object.assign(Oject.assign(obj.base, {scrollTrigger: this.baseSet.scrollTrigger}), obj.set));

                } else { // use scrollTrigger settings set inline 

                    // create settings and initialize animation 
                    gsap.to(obj.sel, Object.assign(Object.assign(obj.base, {scrollTrigger: obj.scrollTrigger}), obj.set));
                    
                }
            }   
        }
        else if (obj.type === "fromTo"){ // create fromTo tween
            
            if (obj.useBase === false){ // use base settings set in main js
            
                if (obj.base !== null){ // update main js base settings with baseSettings provided inline
                    
                    if (obj.hasTrigger === false ){ // use scroll trigger set in main js 

                        if (obj.scrollTrigger !== null ){ // update scrollTrigger in baseSettings with st set inline 
                            
                            // create settings and intialize animation
                            gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, Object.assign(Object.assign(this.baseSet, obj.base), {scrollTrigger: obj.scrollTrigger})));
                            
                        } else { // dont update scrollTrigger if it isn't present 
                            
                            // create settings and intialize animation
                            gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, Object.assign(this.baseSet, obj.base)));
                            
                        }
 
                    } else { // replace scrolTrigger object in base settings with scrollTrigger settings set inline
                        
                        // udate base settings and 
                        // change updated basesettings scrollTrigger to obj scrollTrigger
                        let updatedBase = Object.assign(this.baseSet, obj.base);
                        updatedBase.scrollTrigger = obj.scrollTrigger; 
                        
                        // create the gsap animation
                        gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, updatedBase));
                        
                    }
                    
                } else { // use baseSettings from main js without updating
                    if (obj.hasTrigger === false){ // use scroll trigger set in main js

                    } else { // replace scrolTrigger object in base settings with scrollTrigger settings set inline

                    }
                    // create settings and initialize animation 
                    gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, this.baseSet));
                }
                
            } else { // use baseSettings set inline

                // create settings and initialize animation 
                gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, Object.assign(obj.base, obj.scrollTrigger)));
                
            }
        }
        else if (obj.type === "scroll"){ // create ScrollTo tween
            
            // scroll type doesn't take any base settings
            // create scrollTo instance, add event listener to trigger it
            // you have to set scrollTo in the className if you don't put data-href 
            // window scroll by default            
            // link item to be clicked

            const navBtn = document.querySelector(obj.sel);

            if (navBtn.dataset.href !== undefined){ // if there is a reference link 
                
                if (obj.set == null){ // create an object for scrollTo settings if it doesn't exist yet
                    obj.set= {};
                }

                // set scroll target
                obj.set.y = navBtn.dataset.href;
            }

            if (obj.base !== null){ // costum base settings 
 
                if (obj.start !== null){ //set start position if exists
                     
                    // listen to click event 
                    navBtn.addEventListener('click', ()=> {
                        gsap.to(obj.start, Object.assign({scrollTo: obj.set}, obj.base));
                    })
                    
                } else {
                    
                    // listen to click event 
                    navBtn.addEventListener("click", ()=>{
                        gsap.to(window, Object.assign({scrollTo: obj.set}, obj.base));
                    })
                }

            } else { // no costum base settings

                if (obj.start !== null){ //set start position if exists
                     
                    // listen to click event 
                    navBtn.addEventListener('click', ()=> {
                        gsap.to(obj.start, Object.assign({scrollTo: obj.set}, this.baseSet));
                    })
                    
                } else {
                    
                    // listen to click event 
                    navBtn.addEventListener("click", ()=>{
                        gsap.to(window, Object.assign({scrollTo: obj.set}, this.baseSet));
                    })
                }
            }
        
        }

    };
    this.stringConvert = (input) => { // converts strings into numbers, floats and bools
        
        // check for bools
        if (input === "true"){
            return Boolean(input);

        } else if (input === "false"){
            return !Boolean(input);
        } 
        // check for numbers or floats
        else if (!isNaN(+input)){
            return +input;

        // return string if no boolean number or float
        } else {

            return input; 
        }
        
    }    
    this.animInit = (els, sel) => { // initiates animations on websit, selects targets create animation settings and tween instances
        
        var animN = 0; 
        // get elements class names in list and split animation settings and type from the list into arrays of settings and animation type
        els.forEach((el) => {
            
            // transform class selector into settings obj for animation
            (()=>{
                return new Promise((resolve) => {

                    let animObj = {
                        useBase: false, // if true then only use inline base settings for tween
                        hasTrigger: true, // if true then use set trigger to start animation ? 
                        start: null,
                        base: null,
                        scrollTrigger: null,
                        set: {},
                    }; 
                    
                    // create animation selector for gsap
                    el.className += " anim-" + String(animN);
                    animObj.sel = ".anim-" + String(animN); 
                    animN++;

                    for (let classN of el.classList.entries()){
                        
                        if (classN[1].includes("type:")){ // find type of gsap
                            animObj.type = classN[1].split(":")[1];
                        } 
                        if (classN[1].includes("scrollStart:")){ // find scrollStart for scroll type animations
                            
                            animObj.start = split(":")[1];

                        }
                        if (classN[1].includes("hasTrigger:")){ // if true add scrollTrigger settings -> default is true
                            
                            animObj.hasTrigger = this.stringConvert(classN[1].split(":")[1]);

                        }
                        if (classN[1].includes("useBase:")){ // if true add scrollTrigger settings -> default is true
                            
                            animObj.useBase = this.stringConvert(classN[1].split(":")[1]);

                        }
                        if (classN[1].includes("set|")){ // create settings object for animation
                            
                            // create set then add to object 
                            for (let val of classN[1].replace("set|", "").replace("-", " ").split("|")){
                                animObj.set[val.split(':')[0]] = this.stringConvert(val.split(':')[1]);  
                            };
                                        
                        } 
                        if (classN[1].includes("setFrom|")){ // create "From" settings for animation
                            
                            animObj.set.from = {};

                            // create set then add to object 
                            for (let val of classN[1].replace("setFrom|", "").replace("-", " ").split("|")){
                                animObj.set.from[val.split(':')[0]] = this.stringConvert(val.split(':')[1]);  
                            };
                            
                        } 
                        if (classN[1].includes("setTo|")){ // create "To" settings for animation
                            
                            animObj.set.to = {};

                            // create set then add to object 
                            for (let val of classN[1].replace("setTo|", "").replace("-", " ").split("|")){
                                animObj.set.to[val.split(':')[0]] = this.stringConvert(val.split(':')[1]);  
                            };
                        } 
                        if (classN[1].includes("base|")){ // create base settings for animation
                            
                            animObj.base = {};

                            // create set then add to object 
                            for (let val  of classN[1].replace("base|", "").replace("-", " ").split("|")){
                                animObj.base[val.split(':')[0]] = this.stringConvert(val.split(':')[1]);  
                            };
                        } 
                        if (classN[1].includes("scrollTrigger|")){ // create scrollTrigger settings for animation 
                            
                            // create settings for animation 
                            animObj.scrollTrigger = {};

                            // create set then add to object 
                            for (let val of classN[1].replace("scrollTrigger|", "").replace("-", " ").split("|")){
                                animObj.scrollTrigger[val.split(':')[0]] = this.stringConvert(val.split(':')[1]);  
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