//Create Map
function geoLocation(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            const map = L.map('mapid').setView([latitude, longitude], 13);

            //Create and add tileLayer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            console.log(`a latitude ${latitude} e a longitude ${longitude}`)


            const storeSpan = document.querySelectorAll('#store')
            const dataSpan = [
                {
                    id:"1",
                    name: "Loja1 - Santos Praia Mar",
                    lat: "-23.976896",
                    lon: "-46.311185"
                },

                {
                    id:"2",
                    name: "Loja2 - Santos Gonzaga",
                    lat: "-23.967227",
                    lon: "-46.334464",
                },

                {
                    id:"3",
                    name: "Loja3 - Praia Grande",
                    lat: "-23.997473",
                    lon: "-46.407459",
                }
        ]
            dataSpan.forEach(span => {
                storeSpan.innerHTML += `<span hidden
                data-id="${span.id}"
                data-name="${span.name}"
                data-lat="${span.lat}"
                data-lon="${span.lon}"
                ></span>`

                //create icon
                const icon = L.icon({
                    iconUrl: "image/logo.svg",
                    iconSize: [58, 68],
                    iconAnchor: [29, 68],
                    popupAnchor:[170, 2]
                })
                const popup = L.popup({
                    closeButton: false,
                    className: 'map-popup',
                    minWidth: 240,
                    minHeight: 240
                }).setContent(`${span.name}<a href="/showcase${span.id}.html"><img src="image/arrow.svg"></a>`)

                L.marker([span.lat, span.lon], {icon}).addTo(map).bindPopup(popup)
            })

        }, function(error){
            console.log(error)
        })
    }else{
        alert('ops não foi possivel pegar a localização')
    }   
}
geoLocation()
