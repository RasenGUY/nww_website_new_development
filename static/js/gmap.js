//javascript for map
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("g-map"), {
      center: { lat: 20.44608, lng: 106.34772 },
      zoom: 15,
    });
  }
