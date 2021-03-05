// ----------------- animations -----------------
export function Animation (baseSet) {
    
    this.baseSet = baseSet, // main settings
    // animation function
    this.createAnim = (obj) => {
        // creates gsap tween settings and initializes instances of these tweens //

        
        // console.log("type: "+ obj.type);
        // console.log("animObj: \n");
        // console.log(obj);
        // console.log("base: \n");
        // console.log(this.baseSet);

        console.log("\n ----------------------- PRE animation information -----------------");
        console.log("animNum: " + obj.sel);
        console.log("type: " + obj.type);
        console.log(this.baseSet);
        console.log(obj.set);
        console.log("\n");
        
        console.log("---------------- GSAP animation information ---------------");
        if (obj.useBase === false){ // use base settings set in main js
            
            if (obj.base !== null){ // update base settings if provided inline
                
                if (obj.hasTrigger === false ){ // use scroll trigger set in main js 
                    
                    if (obj.scrollTrigger !== null ){ // update base.scrollTrigger if scrollTrigger is present 
                        
                        // initiate animations
                        if (obj.type === "to"){ 
                            
                            gsap.to(obj.sel, Object.assign(obj.set, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}}, obj.scrollTrigger)); 

                            console.log(gsap.to(obj.sel, Object.assign(obj.set, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}}, obj.scrollTrigger)))
                        }
                        if (obj.type === "from"){
                            
                            gsap.from(obj.sel, Object.assign(obj.set, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}}, obj.scrollTrigger)); 

                            console.log(gsap.from(obj.sel, Object.assign(obj.set, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}}, obj.scrollTrigger))) 
                        }
                        if (obj.type === "fromTo"){
                            
                            gsap.from(obj.sel, Object.assign(obj.set.to, obj.set.from, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}}, obj.scrollTrigger)); 

                            console.log(gsap.from(obj.sel, Object.assign(obj.set.to, obj.set.from, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}}, obj.scrollTrigger)));
                        }
                        
                    } else { // dont update scrollTrigger if it isn't present 
                        
                        // initiate animations
                        if (obj.type === "to"){ 
                            gsap.to(obj.sel, Object.assign(obj.set, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}}));                            
                            console.log(gsap.to(obj.sel, Object.assign(obj.set,this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}})))                            
                        }
                        if (obj.type === "from"){
                            gsap.from(obj.sel, Object.assign(obj.set, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}}));
                            console.log(gsap.from(obj.sel, Object.assign(obj.set, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}})))
                        }
                        if (obj.type === "fromTo"){
                            gsap.from(obj.sel, obj.set.from, Object.assign(obj.set.to, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}}));                            
                            console.log(gsap.from(obj.sel, obj.set.from, Object.assign(obj.set.to, this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}})));                           
                        } 
                    }

                } else { // replace scrolTrigger object in base settings with scrollTrigger settings set inline
                    
                    // udate base settings and 
                    // change updated basesettings scrollTrigger to obj scrollTrigger
                    let updatedBase = Object.assign(this.baseSet, obj.base, {scrollTrigger: {trigger: obj.sel}});
                    updatedBase.scrollTrigger = obj.scrollTrigger; 
                    
                    // initiate animations
                    if (obj.type === "to"){ 
                        gsap.to(obj.sel, Object.assign(obj.set, updatedBase));                        
                        console.log(gsap.to(obj.sel, Object.assign(obj.set, updatedBase)))                        
                    }
                    if (obj.type === "from"){
                        gsap.from(obj.sel, Object.assign(obj.set, updatedBase));
                        console.log(gsap.from(obj.sel, Object.assign(obj.set, updatedBase)))
                    }                   
                    if (obj.type === "fromTo"){
                        gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, updatedBase));
                        console.log(gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, updatedBase)))
                    } 
                }
            
            } else { // no update of baseSettings

                if (obj.hasTrigger === false){ // use scrollTrigger settings from baseSettings
                    
                    // initiate animations
                    if (obj.type === "to"){ 
                        gsap.to(obj.sel, Object.assign(this.baseSet, obj.set, {scrollTrigger: {trigger: obj.sel}}));
                        console.log(gsap.to(obj.sel, Object.assign(this.baseSet, obj.set, {scrollTrigger: {trigger: obj.sel}})))
                    }
                    if (obj.type === "from"){
                        console.log(gsap.from(obj.sel, Object.assign(this.baseSet, obj.set, {scrollTrigger: {trigger: obj.sel}})))
                    }
                    if (obj.type === "fromTo"){                        
                        gsap.fromTo(obj.sel, obj.set.from, Object.assign(this.baseSet, obj.set.to, {scrollTrigger: {trigger: obj.sel}}));
                        console.log(gsap.fromTo(obj.sel, obj.set.from, Object.assign(this.baseSet, obj.set.to, {scrollTrigger: {trigger: obj.sel}})))
                    } 

                } else { // use scrollTrigger settings set inline 

                    // initiate animations
                    if (obj.type === "to"){ 
                        gsap.to(obj.sel, Object.assign(this.baseSet, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: obj.scrollTrigger}, obj.set));
                        console.log(gsap.to(obj.sel, Object.assign(this.baseSet, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: obj.scrollTrigger}, obj.set)));
                    }
                    if (obj.type === "from"){
                        gsap.from(obj.sel, Object.assign(this.baseSet, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: obj.scrollTrigger}, obj.set));
                        console.log(gsap.from(obj.sel, Object.assign(this.baseSet, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: obj.scrollTrigger}, obj.set)))
                    }
                    if (obj.type === "fromTo"){                        
                        gsap.fromTo(obj.sel, obj.set.from, Object.assign(this.baseSet, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: obj.scrollTrigger}, obj.set.to));                      
                        console.log(gsap.fromTo(obj.sel, obj.set.from, Object.assign(this.baseSet, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: obj.scrollTrigger}, obj.set.to)));                       
                    } 
                }
            }

        } else { // only use baseSettings set inlne 

            if (obj.hasTrigger === false){ // use scrollTrigger settings from baseSettings
                // initiate animations
                if (obj.type === "to"){ 
                    gsap.to(obj.sel, Object.assign(obj.base, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: this.baseSet.scrollTrigger}, obj.set));
                    console.log(gsap.to(obj.sel, Object.assign(obj.base, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: this.baseSet.scrollTrigger}, obj.set)))
                }
                if (obj.type === "from"){
                    gsap.from(obj.sel, Object.assign(obj.base, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: this.baseSet.scrollTrigger}, obj.set));
                    console.log(gsap.from(obj.sel, Object.assign(obj.base, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: this.baseSet.scrollTrigger}, obj.set)))
                }
                if (obj.type === "fromTo"){                        
                    gsap.fromoT(obj.sel, obj.set.from, Object.assign(bj.base, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: this.baseSet.scrollTrigger}, obj.set.to));
                    console.log(gsap.fromoT(obj.sel, obj.set.from, Object.assign(obj.base, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: this.baseSet.scrollTrigger}, obj.set.to)))
                }     

            } else { // use scrollTrigger settings set inline 
                
                // initiate animations
                if (obj.type === "to"){ 
                    gsap.to(obj.sel, Object.assign(obj.base, {scrollTrigger: obj.scrollTrigger}, {scrollTrigger: {trigger: obj.sel}}, obj.set));
                    console.log(gsap.to(obj.sel, Object.assign(obj.base, {scrollTrigger: {trigger: obj.sel}}, {scrollTrigger: obj.scrollTrigger}, obj.set)))
                }
                if (obj.type === "from"){
                    gsap.from(obj.sel, Object.assign(obj.base, {scrollTrigger: obj.scrollTrigger}, {scrollTrigger: {trigger: obj.sel}}, obj.set));
                    console.log(gsap.from(obj.sel, Object.assign(obj.base, {scrollTrigger: obj.scrollTrigger}), {scrollTrigger: {trigger: obj.sel}}, obj.set));
                }
                if (obj.type === "fromTo"){                        
                    gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.base, {scrollTrigger: obj.scrollTrigger}, {scrollTrigger: {trigger: obj.sel}}, obj.set.to));
                    console.log(gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.base, {scrollTrigger: obj.scrollTrigger}, {scrollTrigger: {trigger: obj.sel}}, obj.set.to)))
                }                  
            }
        } 

        if (obj.type === "scroll"){ // create ScrollTo tween
            // scrollTo tween requires its own base settings set inline scrollTo settings don't have to be included but will be used when set inline

            const navBtn = document.querySelector(obj.sel);

            if (navBtn.dataset.href !== undefined){ // automatically add scrollTo target
                
                if (obj.set == null){ // create an object for scrollTo settings if it doesn't exist yet
                    obj.set= {};
                }

                // set scroll target
                obj.set.y = navBtn.dataset.href;
            }

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
            
        }
        console.log(`---------------- END ANIMTION  ${obj.sel}---------------`);


        
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
                        hasTrigger: false, // if true then use set trigger to start animation ? 
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
                            for (let val of classN[1].replace("set|", "").replace("_", " ").split("|")){
                                animObj.set[val.split(':')[0]] = this.stringConvert(val.split(':')[1]);  
                            };
                                        
                        } 
                        if (classN[1].includes("setFrom|")){ // create "From" settings for animation
                            
                            animObj.set.from = {};

                            // create set then add to object 
                            for (let val of classN[1].replace("setFrom|", "").replace("_", " ").split("|")){
                                animObj.set.from[val.split(':')[0]] = this.stringConvert(val.split(':')[1]);  
                            };
                            
                        } 
                        if (classN[1].includes("setTo|")){ // create "To" settings for animation
                            
                            animObj.set.to = {};

                            // create set then add to object 
                            for (let val of classN[1].replace("setTo|", "").replace("_", " ").split("|")){
                                animObj.set.to[val.split(':')[0]] = this.stringConvert(val.split(':')[1]);  
                            };
                        } 
                        if (classN[1].includes("base|")){ // create base settings for animation
                            
                            animObj.base = {};

                            // create set then add to object 
                            for (let val  of classN[1].replace("base|", "").replace("_", " ").split("|")){
                                animObj.base[val.split(':')[0]] = this.stringConvert(val.split(':')[1]);  
                            };
                        } 
                        if (classN[1].includes("scrollTrigger|")){ // create scrollTrigger settings for animation 
                            
                            // create settings for animation 
                            animObj.scrollTrigger = {};

                            // create set then add to object 
                            for (let val of classN[1].replace("scrollTrigger|", "").replace("_", " ").split("|")){
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