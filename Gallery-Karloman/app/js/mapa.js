function myMap() {

var mapProp= {
    center:new google.maps.LatLng(-0.164158, -78.481255),
    zoom:20,
};
var mapa=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var Marcador = new google.maps.Marker({
	    position: new google.maps.LatLng(-0.164158, -78.481255),
        map: mapa
    });
}


