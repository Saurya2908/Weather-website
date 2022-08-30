const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    url='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=2e7e5d004ccc6b291eba5ff705f101e3'
    request({url,json:true}, (error,{body})=>{
        if(error){
        callback('unable to connect to weather services',undefined)
        }else if(body.cod===400){
        callback('unable to find forecast!!',undefined)
        }else{
        callback(undefined,body.weather[0].description+'. It is '+(body.main.temp-273).toFixed(2)+' degrees out there. There is a '+body.clouds.all+'% chance of rain.')
        }
})
}

module.exports=forecast