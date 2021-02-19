// ----------------- animations -----------------
export function Animation (set) {
    
    this.set = set, // main settings
    // this.classList = animList;  

    // animation function
    this.createAnim = async (sel, settings) => {
        // console.log(set)
        // console.log(sel)
        // creates GsapTween based on given class
        try {
            // find out what tween to create first -> set tween type    
            if (sel.includes("-to-") === true){ // for to tweens
                
                // create settings and initialize animation
                const tweenSet = await this.createAnimSet("to", sel); 
                gsap.to(sel, tweenSet);

            }
            else if (sel.includes("-fromTo-") === true){
                
                // create settings and intialize animation
                const tweenSet = await this.createAnimSet("fromTo", sel); 
                gsap.fromTo(sel, tweenSet[0], tweenSet[1]);
            }
            else if (sel.includes("-from-") === true){
                
                // create settings and initialize animation 
                const tweenSet = await this.createAnimSet("from", sel); 
                gsap.from(sel, tweenSet);
                console.log(set);
            }

        } catch (e) {
            console.log(e);
        }

    };

    // creates settings
    this.createAnimSet = async (type, settings, sel) => { 
        // object for storing settings
        const newSet = {
            from: {},
            to: {}
        };

        // set scrollTrigger if not set at initiation
        if (this.set.base.scrollTrigger.trigger === null){
            this.set.base.scrollTrigger.trigger = sel;
        };

        if (type === "to"){ // to triggers one settings object for tween
            const settings = Object.assign(this.set.to, baseSet);
            return settings; 
        }
        else if (type === "fromTo"){ // fromTo triggers two settings object for tween 
    
            if (sel.includes("rtl")){ // right to left
                
                newSet.from.x = `-=${this.fromTo.from.x}`; 
                newSet.from.opacity = this.fromTo.from.opacity; 
                newSet.to.x = 0;
                setTo.opacity = 1;
                const newSetTo = Object.assign(setTo, baseSet);
                return [setFrom, newSetTo];
            }
            else if (sel.includes("ltr")){ // left to right
                setFrom.x = 100; 
                setFrom.opacity = 0; 
                setTo.x = 0;
                setTo.opacity = 1;
                const newSetTo = Object.assign(setTo, baseSet)
                return [setFrom, newSetTo];
            } else if (sel.includes("btt")){ // bottom to top
                setFrom.y = -100; 
                setFrom.opacity = 0; 
                setTo.y = 0;
                setTo.opacity = 1;
                const newSetTo = Object.assign(setTo, baseSet)
                return [setFrom, newSetTo];
            } else if (sel.includes("ttb")){ // top to bottom 
                setFrom.y = 100; 
                setFrom.opacity = 0; 
                setTo.y = 0;
                setTo.opacity = 1;
                const newSetTo = Object.assign(setTo, baseSet)
                return [setFrom, newSetTo];
            }
    
        }
        else if (type === "from"){ // from triggers contain one settings object for tween
            
            if (sel.includes('rtl')){
                

                newSet.from.x = `-=${this.set.from.x}`; // set starting point
                newSet.from.opacity = this.set.from.opacity;
                const settings = Object.assign(newSet.from, this.set.base);
                return settings;
                
            } else if (sel.includes("ltr")){
                
                set.from.x = `+=${set.from.x}`;
                set.from.opacity = 1;  
                const settings = Object.assign(set.from, this.set.base);
                return settings;
                
            } else if (sel.includes("ttb")){
                
                set.from.y = `+=${set.from.y}`;
                set.from.opacity = 0;  
                const settings = Object.assign(set.from, this.set.base);
                return settings;
                
            } else if (sel.includes("ttb")){
                
                set.from.y = `-=${set.from.x}`;
                set.from.opacity = 0;  
                const settings = Object.assign(set.from, this.set.base);
                return settings;
    
            }
        }
    }; 

    
    this.animInit = (els) => { // initiates animations on websit, selects targets create animation settings and tween instances
        
        // get elements class names in list and split animation settings and type from the list into arrays of settings and animation type
        els.forEach((el) => {
            
            (()=>{
                return new Promise((resolve, reject) => {

                    let animObj = {
                        set: {},
                    }; 
                    
                    for (let classN of el.classList.entries()){
                        
                        if (classN[1].includes("type:")){
                            animObj.type = classN[1].split("-").find(val => val.includes("type")).split(":")[1];
                            animObj.direction = classN[1].split("-").find(val => val.includes("direction")).split(":")[1];
                        } 
    
                        if (classN[1].includes("set-")){
                            
                            // create set then add to object 
                            for (let val  of classN[1].replace("set-", "").split("-")){
                                animObj.set[val.split(':')[0]] = val.split(':')[1];  
                            };
                                    
    
                        } else {
                            continue;
                        }    
                    }
                    resolve(animObj)
                })
            })().then( animObj => console.log(animObj)) // create animation

        })

    }
}