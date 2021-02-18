// ----------------- animations -----------------
export function Animation (set, animList) {
    
    this.set = set, // main settings
    this.classList = animList;  

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
    this.createAnimSet = async (type, sel) => { 
        
        // creates settings for animation based on element thing-them 
        const baseSet = {
            duration: 0.5,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: sel,
                start: "top center"
            }
        } 
    
        if (type === "to"){ // to triggers one settings object for tween
            const settings = Object.assign(this.set.to, baseSet);
            return settings; 
        }
        else if (type === "fromTo"){ // fromTo triggers two settings object for tween 
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
        else if (type === "from"){ // from triggers contain one settings object for tween
            
            if (sel.includes('rtl')){
                const newSet = {
                    from: {}
                };

                newSet.from.x = `-=${this.set.from.x}`; // set starting point
                newSet.from.opacity = this.set.from.opacity;
                const settings = Object.assign(newSet.from, baseSet);
                return settings;
                
            } else if (sel.includes("ltr")){
                
                set.from.x = `+=${set.from.x}`;
                set.from.opacity = 1;  
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
    this.animInit = (els) => {

        // initiates based on list of selectors, settings for for tweens and from tweens
    
        els.forEach((el)=>{
            
            // get class name and append .infront of classname
            this.classList.forEach((classN)=>{
                // console.log(classN + " : " + String(el.classList).includes(classN));                 

                console.log(classN + "; " + String(el.classList).includes(classN))
                if (String(el.classList).includes(classN)){
                    (() => {
                        return new Promise ((animClassN, reject) => {
                            animClassN(el.className.replaceAll(" ", ".")); 
                            reject("couldn't create class selector")
                        })
                    })().then ((classSel)=>{
                        this.createAnim("." + classSel);
                    })
                }
            }) 

        })
    }
}