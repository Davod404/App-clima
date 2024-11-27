/** @type {HTMLInputElement} */

function apiURL(){

    const url = new URL("http://api.weatherapi.com/v1/forecast.json?")
    url.searchParams.append("param", "value")
    
    url.searchParams.append("key", "28d3df0f8c974295baa00436241809")
    url.searchParams.append("q", "santiago")
    url.searchParams.append("aqi","yes")
    url.searchParams.append("days","7")

    fetch(url)
    .then(response => {
        if (response.ok)
            return response.json();
      
          throw new Error(response.status);
        })
    .then(data => {

        objData = new Object(data).valueOf()

        // console.log(objData)

        a = objData.current
        b = objData.forecast.forecastday
        c = objData.location

        
        weather = a.condition.text
        uv = a.uv.toString()
        wind = a.wind_kph.toString().concat("km")
        humidity = a.humidity.toString().concat("%")

        function getForecast(){

            for (let elements of b) {
                // console.log(elements)
                
                
                for (const key in elements) {
                    if (Object.prototype.hasOwnProperty.call(elements, key)) {
                        const element = elements[key];
                        console.log(element)
                    }
                }






        
            }
        }

        // Forecast    
            // TEMPERATURA MAXIMA/MINIMA = forecastday, 0, maxtemp_c / mintemp_c
            // PROBABILIDAD DE PRECIPITACION = forecastday, 0, daily_will_it_rain	
            // TEMPERATURA MAXIMA/MINIMA = forecastday, 1-7, maxtemp_c / mintemp_c
            // TIEMPO DE 6 DIAS SIGUIENTES = forecastday, 1-7, 

        getForecast()

        country = c.country
        city = c.name
        
        // console.log(weather + ", " + uv + ", " + wind + ", " + humidity)
        // console.log(country + ", " + city)

        


    }).catch(err => {
        console.error("ERROR: ", err.message)
      });

}
  
apiURL()







                            // PRUEBAS

                            // forecastEntries = Object.entries(elements)
                            // forecastKey = Object.keys(elements)
                            // forecastVal = Object.values(elements)

                            // ba = new Map([forecastKey, forecastVal])
                            // console.log(ba)


                            // ba = Array(elements)
                            // ba.forEach(element => {
                            //     bb = Object.entries(element)
                            //     bc = bb[2]
                            //         console.log(bb)
                                
                            //     bb.forEach(items =>{
                            //         bc = items
                            //         console.log(bc)
                            //     })
                            // });

                            // console.log(ba)









//   function getGeolocation() {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         currentPosition => resolve(currentPosition.coords),
//         error => reject(error)
//       )
//     })
//   }
  
// function useGeolocation() {

// const geoloc = async() => {
//         try {
//         const { latitude: lat, longitude: lon } = await getGeolocation()
//             setLocation({ lat, lon })
//             setLoaded(true)
//         } catch(error) {
//             setError(error)
//             setLoaded(true)
//         }
//         useEffect(() => {
//             (async() => handleLocation())()
//         }, [handleLocation])
        
//         return [location, error, loaded]

//     }
// }

// getGeolocation()
// useGeolocation()