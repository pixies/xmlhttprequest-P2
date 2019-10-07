function criaLink(cidade){
    return "https://api.mapbox.com/geocoding/v5/mapbox.places/Guanambi.json?access_token=pk.eyJ1IjoiY2ZsYmVkdWNhdG9yIiwiYSI6ImNrMTZrYm1vNTA1dWEzaGxqN2tmMTZlazcifQ.XXsWkpgiguegb-C7WQpGBA"
}

var consulta = new XMLHttpRequest();
var url = criaLink();
consulta.open('GET', url, true); //0

consulta.onreadystatechange = function(e) {
    console.log(this.readyState );
    if (this.readyState == 4){
        console.log(JSON.parse(this.response));
    }
}


consulta.send(); //2


