
// ----------- Gallery -----------
// liebraries
// import libary for modal  

// gallery class
export function Gallery(gallery, imageN, colN, imgSrc, imgSz) {
    // function for generating a random gallery layout based on a random amount of images
    
    this.gallery = gallery; // dom selection of the main gallery element
    this.imgSrc = imgSrc; // image source 
    this.imgSzs = [imgSz.square, imgSz.rectV, imgSz.rectH]; // imgsize
    this.colN = colN;


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
    }

    this.genImgLinkCols = (mainList) => {

        //  populates columns for images on the gallery page
        // generate lists depending on number of columns
        var indexLists = [];
        // create empty lists based on the colN
        let i = 1;
        for (i; i <= this.colN; i++) {
            indexLists.push(Array())
        }
        
        // create list of image sources
        let count = 0; // for arrays in indexLists 
        mainList.forEach((src)=>{
            let img = this.generateImgEL();
            img.firstChild.src = src;
            indexLists[count].push(img)
            
            if (count === indexLists.length - 1){
                count = 0; 
            } else {
                count++; 
            }
        });

        return indexLists

    }; 

    this.randomInt = (min, max) => {
        let num = Math.random() * (max - min) + min;
        return Math.floor(num);
    }
    this.makeRequest = (url) => {
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
    }

    this.populateGal = async () => {
        // populates the gallery columns on the gallery page
        
        try {
            // create mainList 
            const mainList = await this.generateMainList();
            const imgElList = this.genImgLinkCols(mainList);  
            console.log(imgElList); 
            
            // generate columns and inject into DOM
            imgElList.forEach((imgEls) => {
                
                // generate column
                let column = this.generateCol();
                imgEls.forEach((imgEl, index)=>{
                    column.append(imgEl);
                })
                this.gallery.append(column);
            })

        } catch (e) {
            console.log(e); 
        }

    }

    this.generateCol = () => {
        let col; 
        col = document.createElement("div");
        col.className = "f-item image-column"
        return col; 
    }

    this.generateImgEL = () => {

        // create element in which images will sit 
        let imgTag, imgEl;

        imgEl = document.createElement("a");
        imgTag = document.createElement("img");
        imgEl.append(imgTag); 
        
        return imgEl; 

    }

    this.populateGal();
};





