
// ----------- Gallery -----------
// liebraries
// import libary for modal  

// gallery class
export function Gallery(gallery, imageN, colN, imgSrc, imgSz) {
    // function for generating a random gallery layout based on a random amount of images
    
    this.gallery = gallery; // dom selection of the main gallery element
    this.imgSrc = imgSrc; // image source 
    this.imgSzs = [imgSz.square, imgSz.rectV, imgSz.rectH]; // imgsize
    console.log(this.imgSzs);

    this.generateLists = (imageN, colN) => { // generates 3 lists of image links for the gallery
        
        // initialize empty list
        var mainList = [];
        const totalImgs = mainList.length - 1;
        var imgs = []; 

        // generate main list
        let i = 1
        for (i;i <= imageN; i++){
            // create img src 
            let imgSrc = this.imgSrc + String(this.imgSzs[this.randomInt(0, 2)]); 
            mainList.push(imgSrc);           
        };

        // if there is only one column then return mainList
        if (colN === 1){
            break;
        
        } else { // if there is more the one column then create list of img sources appropriately

            // generate lists depending on number of columns
            var indexLists = [];
            
            // create empty lists based on the colN
            let i = 1;
            for (i; i <= colN; i++) {
                indexLists.push([]);
            }

            // create list of image sources
            mainList.forEach( (src, index) => {
                
                if (index % colN === 0) {

                    indexLists[-1].push(src); // populate the last column first

                    let j = indexLists.length - 1;
                    while (j >= 0){

                        // do something 
                    }
    
                }

            });
            return 
        }

        return imgs; 

    }; 

    this.randomInt = (min, max) => {
        let num = Math.random() * (max - min) + min;
        return Math.floor(num);
    }

    this.generateLists(imageN, colN);
};





