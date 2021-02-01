// ----------- Gallery -----------
// liebraries
import { medQueries } from "./functions.js";
// import libary for modal  

// gallery class
export function Gallery(gallery, imageN, imgSrc, imgSz) {
    // function for generating a random gallery layout based on a random amount of images
    
    this.gallery = gallery; // dom selection of the main gallery element
    this.imgSrc = imgSrc; // image source 
    this.imgSzs = [imgSz.square, imgSz.rectV, imgSz.rectH]; // imgsize
    this.colN;

    this.generateMainList = async () => { // generates 3 lists of image links for the gallery    
        
        // initialize empty list
        let mainList = [];
        // generate main list
        let i = 1
        for (i;i <= imageN; i++) {    
            
            // create img src 
            let imgSrc = this.imgSrc + String(this.imgSzs[this.randomInt(0, 2)]); 
            try {
                let imgUrl = await this.makeRequest(imgSrc);
                mainList.push(imgUrl);
            } catch (e) {
                console.log(e);
            }
        };
        return mainList
    };

    this.generateImgElsList = () => { //  generate page {a > img} els depending on number of columns
        
        var colN;
        console.log(window.innerWidth);
        console.log(window.innerWidth > 768);
        if (window.innerWidth > 768){
            colN = 3; 
        } 
        if (window.innerWidth < 768 && window.innerWidth > 576) {
            colN = 2;
        }
        if (window.innerWidth < 576) {
            colN = 1;
        }
        console.log(colN)
        
        var indexLists = [];
        // create empty lists based on the colN  <-- code here needs to execute faster --->
        let i = 0;
        for (i; i < colN; i++) {
            indexLists.push(Array())
        }
        
        // create list of image sources
        let count = 0; // for arrays in indexLists 
        
        this.mainList.forEach((src)=>{
        
            // create img tag
            let img = this.createImgEl();
            img.firstChild.src = src;
            
            indexLists[count].push(img)
            if (count === indexLists.length - 1){
                count = 0; 
            } else {
                count++; 
            }
        });

        console.log(indexLists)
        return indexLists;

    }; 

    this.randomInt = (min, max) => { // generates random number
        let num = Math.random() * (max - min) + min;
        return Math.floor(num);
    };

    this.makeRequest = (url) => { // makes ajax request
        return new Promise((resolve, reject)=>{
            // create xhr request and return the url 
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            
            // get img url 
            xhr.onload =  () => {
                resolve(xhr.responseURL);
            };
            xhr.onerror = () => {
                reject("Connection Error"); 
            }
            xhr.send();
        });
    };

    this.createEls = async (loaded) => { // sends ajax requests for images splits them into {a > img} els

        try {
            let loading = true;
            
            while (loading){
                
                if (!loaded){
                    this.mainList = await this.generateMainList();
                }
                
                // will split mainlist based on columns
                this.injectList = this.generateImgElsList();

                
                // inject loading code
                // loaderFunc();

                loading = false;   
            }
            
        } catch (e) {
            console.log(e); 
        }
    };

    this.createCol = () => { //creates one img column 
        let col; 
        col = document.createElement("div");
        col.className = "f-item image-column"
        return col; 
    };

    this.createImgEl = () => { // creates one <a> in with nested img element

        // create element in which images will sit 
        let imgTag, imgEl;

        imgEl = document.createElement("a");
        imgEl.className = "l-flex content-justify-between";
        imgTag = document.createElement("img");
        imgEl.append(imgTag); 
        
        return imgEl; 

    };

    this.generateImgCols = () => { // generate column and inject it 
        
        // generate columns and inject into DOM
        this.injectList.forEach((imgEls) => {

            // creat column
            let column = this.createCol();
            imgEls.forEach((imgEl)=>{
                column.append(imgEl);
            })
            this.gallery.append(column);
        })  
    };

    this.initialize = async (loaded) => {
        
        // create columns based on window width
        try {
            
            // retrieveLinks and add in el boxes
            await this.createEls(loaded);
            this.generateImgCols(); //creates columns based on windowwidth

            // inject
            // check screen size, generate columns based on screen size
        
        } catch (e) {
            console.log(e)
        }
    }
};





