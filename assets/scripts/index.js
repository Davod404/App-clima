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

        console.log(objData)

        a = objData.current
        b = objData.forecast.forecastday
        c = objData.location

        
        weather = a.condition.text
        uv = a.uv
        wind = a.wind_kph.toString().concat("km")
        humidity = a.humidity.toString().concat("%")

        country = c.country
        city = c.name
        


        // Location
            // PAIS = location, country
            // CITY = location, city
            //# variable q debe cambiar dependiendo de la ubicacion del navegador o ubicacion gps si es ingresada 
            
        // Current
            // UV = current, uv
            // VELOCIDAD DEL VIENTO = current, wind_kph
            // HUMEDAD = current, humidity
            // TIEMPO DE HOY = current, condition, text
        
        // Forecast    
            // TEMPERATURA MAXIMA/MINIMA = forecastday, 0, maxtemp_c / mintemp_c
            // PROBABILIDAD DE PRECIPITACION = forecastday, 0, daily_will_it_rain	
            // TEMPERATURA MAXIMA/MINIMA = forecastday, 1-7, maxtemp_c / mintemp_c
            // TIEMPO DE 6 DIAS SIGUIENTES = forecastday, 1-7, 




        function getCurrent(){

            for (let items of Object.entries(a)) {
                ab = items
                console.log(ab)
            }
        }

        function getForecast(){

            for (let elements of b) {

                ba = Object.entries(elements)
                
                ba.forEach(element => {
                    bb = element.valueOf()
                });
            }
            
        }

        // getCurrent()
        // getForecast()

    }).catch(err => {
        console.error("ERROR: ", err.message)
      });

}
  
apiURL()













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