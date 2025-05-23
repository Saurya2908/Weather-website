//Deprecated code using request module

// const request=require('request')

// const forecast=(latitude,longitude,callback)=>{
//     url='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=2e7e5d004ccc6b291eba5ff705f101e3'
//     request({url,json:true}, (error,{body})=>{
//         if(error){
//         callback('unable to connect to weather services',undefined)
//         }else if(body.cod===400){
//         callback('unable to find forecast!!',undefined)
//         }else{
//         callback(undefined,body.weather[0].description+'. It is '+(body.main.temp-273).toFixed(2)+' degrees out there. There is a '+body.clouds.all+'% chance of rain.')
//         }
// })
// }

// module.exports=forecast

const axios = require('axios');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2e7e5d004ccc6b291eba5ff705f101e3`;

    axios.get(url)
        .then(response => {
            const body = response.data;

            if (body.cod === 400) {
                callback('Unable to find forecast!!', undefined);
            } else {
                const description = body.weather[0].description;
                const temperature = (body.main.temp - 273).toFixed(2); // Convert from Kelvin to Celsius
                const cloudiness = body.clouds.all;
                callback(undefined, `${description}. It is ${temperature} degrees out there. There is a ${cloudiness}% chance of rain.`);
            }
        })
        .catch(error => {
            if (error.response) {
                // Received a response but it was an error (like 400 or 500)
                callback('Unable to find forecast!!', undefined);
            } else if (error.request) {
                // No response received
                callback('Unable to connect to weather services', undefined);
            } else {
                // Something else went wrong
                callback('An unexpected error occurred', undefined);
            }
        });
};

module.exports = forecast;