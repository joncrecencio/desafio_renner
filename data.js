const CepCoords = require("coordenadas-do-cep")

module.exports = [
    async function valida() {
        try{
            const info = await CepCoords.getByCep("04302022");
            const latitude = info.lat
            console.log(`Latitude ${latitude}`)

            const longitude = info.lon
            console.log(`Longitude ${longitude}`)

                return latitude, longitude

        } catch (err) {
            console.log(err)
        }
    
    }
]