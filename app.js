const express = require("express");
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/' , (req,res) => {
    res.sendFile(__dirname + "/index.html");
    // console.log("Our server is running")
    // res.send("this is just for checking");
    
});
app.post('/', (req,res) =>{
    const query = req.body.cityTemp;
    const apiKey = 'fbd1af3bb78314bf0fa08c27a6867624';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+apiKey+'&units=metric';
    
    https.get(url , (response) => {
        response.on('data',(data) =>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            console.log(`Temperature in ${query} is ${temp} degrees Celsius`);
            res.send(`Temperature in ${query} is ${temp} degrees Celsius`);
        })
        // console.log(response.data.main.temp);
    })
    
})

app.listen(3000, () => console.log("our server is working fine at port 3000."))
