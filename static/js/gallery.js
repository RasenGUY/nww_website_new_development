
// ----------- Gallery -----------
// liebraries
// import libary for modal  

// gallery class
export function Gallery(gallery, imageN, colN, imgSrc, imgSz) {
    // function for generating a random gallery layout based on a random amount of images
    
    this.gallery = gallery; // dom selection of the main gallery element
    this.imgSrc = imgSrc; // image source 
    this.imgSzs = [imgSz.square, imgSz.rectV, imgSz.rectH]; // imgsize

    this.generateLists = (imageN, colN) => { // generates 3 lists of image links for the gallery
        
        // initialize empty list
        var mainList = [];
        var imgs = []; 

        // generate main list
        let i = 1
        for (i;i <= imageN; i++){
            // create img src 
            let imgSrc = this.imgSrc + String(this.imgSzs[this.randomInt(0, 2)]); 
            
            mainList.push(imgSrc);           
        };
        // console.log(mainList); 
    
        // if there is only one column then return mainList
        if (colN != 1) { // if there is more the one column then create list of img sources appropriately

            // generate lists depending on number of columns
            var indexLists = [];
            
            // create empty lists based on the colN
            let i = 1;
            for (i; i <= colN; i++) {
                indexLists.push(Array())
            }
            
            let count = 1,
            totalImgLi = indexLists.length - 1; 
            // create list of image sources
            mainList.forEach((src, index) => {
                // console.log((count <= mainList.length) && (count % colN == 0));
                if ((count <= mainList.length) && (count % colN === 0)) {

                    indexLists[totalImgLi].push(src); // populate the last column first

                    let j = totalImgLi - 1;
                    while (j >= 0) {
                        // populate preceding columns
                        indexLists[j].push(mainList[index - 1]);
                        j--;
                    }
                }
                count++;

            });

            imgs = indexLists;

        } else {
            imgs = mainList; 
        }
        // console.log(imgs)
        console.log(imgs);
        return imgs; 

    }; 

    this.randomInt = (min, max) => {
        let num = Math.random() * (max - min) + min;
        return Math.floor(num);
    }

    this.getImgLink = (url) => { // use ajax to make http requests to fetch the url of image i want to display -> just to see if the function above works haha <-- procrastination 

        // create xhr request and return the url 
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        
        var responseUrl; 
        xhr.onload = function () {
            responseUrl = xhr.responseURL;
        }
        xhr.send();

        return String(responseUrl);
    }

    this.generateLists(imageN, colN);
};





