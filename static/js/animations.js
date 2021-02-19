// ----------------- animations -----------------
export function Animation (baseSet) {
    
    this.baseSet = baseSet, // main settings

    // animation function
    this.createAnim = (obj) => {
        // find out what tween to create first -> set tween type    
        
        this.baseSet.onComplete = () => { // remove styles on completion of tweens
            // console.log(obj.sel);
            document.querySelector(obj.sel).removeAttribute("style");
            document.querySelector(obj.sel).classList.remove(obj.sel.replace(".", ""));
        }

        if (obj.type === "to"){ // create to tween

            // create settings and initialize animation 
            gsap.to(obj.sel, Object.assign(obj.set, this.baseSet));
        }
        else if (obj.type === "fromTo"){
            
            // create settings and intialize animation
            gsap.fromTo(obj.sel, obj.set.from, Object.assign(obj.set.to, this.baseSet));
            
        }
        else if (obj.type === "from"){
            
            // create settings and initialize animation  
            gsap.from(obj.sel, Object.assign(obj.set, this.baseSet));

        }

    };
    
    this.animInit = (els, sel) => { // initiates animations on websit, selects targets create animation settings and tween instances
        
        var animN = 0; 
        // get elements class names in list and split animation settings and type from the list into arrays of settings and animation type
        els.forEach((el) => {
            
            // transform class selector into settings obj for animation
            (()=>{
                return new Promise((resolve, reject) => {

                    let animObj = {
                        set: {},
                    }; 
                    
                    // create animation selector for gsap
                    el.className += " anim-" + String(animN);
                    animObj.sel = ".anim-" + String(animN); 
                    animN++;

                    for (let classN of el.classList.entries()){
                        
                        if (classN[1].includes("type:")){ // find type and direction-> always string
                            animObj.type = classN[1].split("|").find(val => val.includes("type")).split(":")[1];
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