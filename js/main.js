
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
  center: {lat:40.730610, lng:-73.935242},
  zoom:10,
  });
  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });
  const categorySelect = document.getElementById('category-select');

  autocomplete = new google.maps.places.Autocomplete(
     (
      document.getElementById('autocomplete')), {
        types : ['(cities)'],
    });
    
    places = new google.maps.places.PlacesService(map);

} 

