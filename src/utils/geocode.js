//Deprecated code using request module

// const request=require('request')

// const geocode=(address,callback)=>{
//     const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYmFnenRvbiIsImEiOiJjbDcwMWExdWcwOXh6NDJvcWY3dGYzdXFkIn0.IiM8PdqEbhdH3il7-Kil2g'
//     request({url, json:true},(error,{body})=>{
//         if(error){
//             callback('Unable to connect to geocoding services!',undefined)
//         }else if(body.features.length===0){
//             callback('No match Found!',undefined)
//         }
//         else{
//             callback(undefined,{
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports=geocode

const axios = require('axios');

const geocode = (address, callback) => {
    const url=`https://geocode.maps.co/search?q=`+address+`&api_key=6820946c81bc0081527596sfx81c697`

    axios.get(url)
        .then(response => {
            const data = response.data;

            if (data[0].length === 0) {
                callback('No match found!', undefined);
            } else {
                callback(undefined, {
                    latitude: data[0].lat,
                    longitude: data[0].lon[0],
                    location: data[0].display_name
                });
            }
        })
        .catch(error => {
            if (error.response) {
                callback('Error in geocoding response!', undefined);
            } else if (error.request) {
                callback('Unable to connect to geocoding services!', undefined);
            } else {
                callback('An unexpected error occurred.', undefined);
            }
        });
};

module.exports = geocode;