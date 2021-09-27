function iniciarMap(){
    var coord = {lat:47.633611, lng:13.041944};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center:coord
    });
    var marker = new google.maps.Marker({
        position:coord,
        map:map
    });
}

function posicion(){
 var lati = document.getElementById("latitud").value;
 var long = document.getElementById("longitud").value;
 var coord = {lat:Number, lng:Number};
 coord.lat = parseFloat(lati);
 coord.lng = parseFloat(long);
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center:coord
    });
    var marker = new google.maps.Marker({
        position:coord,
        map:map
});
}

