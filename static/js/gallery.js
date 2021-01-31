
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


    this.generateMainList = (imageN) => { // generates 3 lists of image links for the gallery    
        // initialize empty list
        var mainList = [];

        // generate main list
        let i = 1
        for (i;i <= imageN; i++){
            
            // create img src 
            let imgSrc = this.imgSrc + String(this.imgSzs[this.randomInt(0, 2)]); 
            mainList.push(imgSrc);
        };
        this.mainList = mainList; 
        // console.log(this.mainList);
    }


    this.generateImgUrls = () => {

        // sends requests http resquests to image generator and return a list of imgUrls     
        let imgUrls = []; // empty list
        var count = 0; 
        const createImgUrls = new Promise ((UrlList) => { // create list with links
            
            this.mainList.forEach((url)=> {
                const getLink = new Promise ((resolve)=> {
                
                    this.getImgLink(url).then(imgUrl => {
    
                        return resolve(imgUrl);
    
                    }).catch(fail => {
                        console.log(fail); 
                    })
    
                }); 
                
                getLink.then(newUrl => {
                    imgUrls.push(newUrl);
                    count++;
                    if (count === imageN) {
                        return UrlList(imgUrls)
                    }
                })
            });
        });

        createImgUrls.then(linkList => {
            this.mainList = linkList;
            this.genImgLinkCols();
            this.populateGal(this.indexLists); 
        })
    }

    this.genImgLinkCols = () => {
        //  populates columns for images on the gallery page

        // if there is only one column then return mainList
        if (this.colN != 1) { // if there is more the one column then create list of img sources appropriately

            // generate lists depending on number of columns
            var indexLists = [];
            
            // create empty lists based on the colN
            let i = 1;
            for (i; i <= this.colN; i++) {
                indexLists.push(Array())
            }
            
            // loop through mainlist
            // consequtively add srcs to index
            // counter to record what index to push to
            
            let count = 0; // for arrays in indexLists
            // create list of image sources
            this.mainList.forEach((src) => {

                let img = this.generateImgEL();
                img.firstChild.src = src;
                indexLists[count].push(img)
                if (count === indexLists.length - 1){
                    count = 0; 
                } else {
                    count++; 
                }
            });
            this.indexLists = indexLists;
            // console.log(indexLists);
        }
        
    }; 

    this.randomInt = (min, max) => {
        let num = Math.random() * (max - min) + min;
        return Math.floor(num);
    }

    this.getImgLink = async (url) => { // use ajax to make http requests to fetch the url of image i want to display -> just to see if the function above works haha <-- procrastination 
        const promise = new Promise((resolve, reject) => {
            // create xhr request and return the url 
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            
            // get img url 
            xhr.onload =  () => {
                resolve(xhr.responseURL);
            };
            xhr.onerror = () => {
                reject("Failed")
                this.getImgLink(url);
            }
            xhr.send();
        }) 
        return promise;
    }

    this.populateGal = (imgNodesList) => {
        // populates the gallery columns on the gallery page

        // create columns based on colN
        imgNodesList.forEach((imgEls, index) => {
            
            // generate column
            let column = this.generateCol();
            imgEls.forEach((imgEl, index)=>{
                column.append(imgEl);
            })
            this.gallery.append(column)
        })
           
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

    // this.generateLists(imageN, colN);
    this.generateMainList(imageN); 
    this.generateImgUrls();

};





