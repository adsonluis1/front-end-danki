const latitude = document.getElementById('latitude')
const longitude = document.getElementById(`longitude`)
navigator.geolocation.getCurrentPosition(certo)
function certo(pos){
    latitude.innerHTML=pos.coords.latitude
    longitude.innerHTML=pos.coords.longitude
}