//Create Map
function geoLocation(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            const map = L.map('mapid').setView([latitude, longitude], 12);

            //Create and add tileLayer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            console.log(`a latitude ${latitude} e a longitude ${longitude}`)
        }, function(error){
            console.log(error)
        })
    }else{
        alert('ops não foi possivel pegar a localização')
    }   
}
geoLocation()

//create icon
const icon = L.icon({
    iconUrl: "image/logo.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2]
})


function addMarker ({id, name, lat, lng}){
    //create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name}<a href="/showcase?id=${id}"><img src="/images/arrow-white.svg"></a>`)

    //Create and add marker
    L
    .marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const storeSpan = document.querySelectorAll('.store span')
storeSpan.forEach(span => {
    const store = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }

    addMarker(store)
})
