//javascript for maps

let contentMap;
window.addEventListener("load", function() {
  svgcontent = document.querySelector(".svg-image.g-map");
  contentMap = svgcontent; 
});

let map;
function initMap() {
  // map = new google.maps.Map(document.getElementById("g-map"), {
    //   center: { lat: -34.397, lng: 150.644 },
    //   zoom: 8,
    // });
    map = new google.maps.Map(contentMap.contentDocument.getElementById("g-map-test"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
