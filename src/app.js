const path=require('path')
const express=require('express')
const hbs=require('hbs')
const app=express()
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

//Paths for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

//Settings for handlebars and views dir
app.set('view engine','hbs')
app.set('views',viewPath)

//Setting to serve static files
app.use(express.static(publicDirectoryPath))

hbs.registerPartials(partialPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name: 'Shaurya'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name: 'Shaurya'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        name: '@weather-app'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address)
        return res.send({
            error:'please provide an address!'
        })
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
                res.send({
                    data:forecastData,
                    location:location
                })
        })
    })
})

app.get('/help/*',(req,res)=>{
    res.render('error',{
        title:'Oops!!',
        message:'Help Article Not Found'
    })
})

app.get('*',(req,res)=>{
    res.render('error',{
        title:'404',
        message:'Page Not Found'
    })
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})