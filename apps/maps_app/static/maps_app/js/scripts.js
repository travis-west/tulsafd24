
function loadMap() {
    // Initialize Google Maps
    const mapOptions = {
      center:new google.maps.LatLng(36.13, -95.94000),
      zoom: 12
    }
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);


    // Load JSON Data
    const dispatchMarkers = getJSONMarkers();
    var infowindow = new google.maps.InfoWindow();

    // Initialize Google Markers
    for(dispatch of dispatchMarkers) {
 
        var iconstring = ''
        if (dispatch.name == "Car Fire"){
            iconstring =  "https://maps.google.com/mapfiles/kml/shapes/firedept.png"
          } 
  



        var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(dispatch.location[0], dispatch.location[1]),
        title: dispatch.name,
 



      })

      google.maps.event.addListener(marker, 'click', (function(marker, dispatch) {
           return function() {
               infowindow.setContent(dispatch.content);
               infowindow.open(map, marker);
           }
      })(marker, dispatch));
    }
  }