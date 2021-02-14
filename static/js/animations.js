// ----------------- animations -----------------
export function Animation () {

    // animation function
    this.createAnim = async (sel, set) => {
        
        // creates GsapTween based on given class
        try {

            // find out what tween to create first -> set tween type 
            if (sel.includes("-to-") === true){ // for to tweens
                
                // create settings and initialize animation
                const tweenSet = await this.createAnimSet("to", sel, set); 
                gsap.to(sel, tweenSet);
            }
            else if (sel.includes("-fromTo-") === true){
                
                // create settings and intialize animation
                const tweenSet = await this.createAnimSet("fromTo", sel, set); 
                gsap(sel, tweenSet[0], tweenSet[1]);
            }
            else if (sel.includes("-from-") === true){
                
                // create settings and initialize animation 
                const tweenSet = await this.createAnimSet("from", sel, set); 
                gsap.to(sel, tweenSet);
            }

        } catch (e) {
            console.log(e);
        }

    };

    // creates settings
    this.createAnimSet = async (type, sel, set) => { 
        
        // creates settings for animation based on element thing-them 
    
        const baseSet = {
            duration: 0.5,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: sel,
                start: "top top"
            }
        } 
    
        if (type === "to"){ // to triggers have all settings set in the set variable 
            const settings = Object.assign(set.to, baseSet);
            return settings; 
        }
        else if (type === "fromTo"){ // fromTo triggers two settings blocks for tween 
            const setFrom = {};
            const setTo = {};
    
            if (sel.includes("rtl")){ // right to left
                setFrom.x = -100; 
                setFrom.opacity = 0; 
                setTo.x = 0;
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
        else if (type === "from"){ // from triggers contain one settings variable
            
            if (sel.includes('rtl')){
                
                set.from.x = `+=${set.from.x}`;
                set.from.opacity = 0;  
                const settings = Object.assign(set.from, baseSet);
                return settings;
                
            } else if (sel.includes("ltr")){
                
                set.from.x = `-=${set.from.x}`;
                set.from.opacity = 0;  
                const settings = Object.assign(set.from, baseSet);
                return settings;
                
            } else if (sel.includes("ttb")){
                
                set.from.y = `+=${set.from.y}`;
                set.from.opacity = 0;  
                const settings = Object.assign(set.from, baseSet);
                return settings;
                
            } else if (sel.includes("ttb")){
                
                set.from.y = `-=${set.from.x}`;
                set.from.opacity = 0;  
                const settings = Object.assign(set.from, baseSet);
                return settings;
    
            }
        }
    }; 

    // initiates animations
    this.animInit = (els, set, animList) => {

        // initiates based on list of selectors, settings for for tweens and from tweens
        
        els.forEach((el)=>{
            
            // get class name and append .infront of classname
            animList.forEach((classN)=>{
                
                if (el.classList.contains(classN)){
                    console.log("."+ animClassN);
                    this.createAnim("." + animClassN, set);
                }
            }) 

        })
    }





}