const output = document.querySelector(".output");
const axios = require("axios");
let temp = "";
axios.get('https://api.openweathermap.org/data/2.5/weather?q=Chandigarh&appid=fbd1af3bb78314bf0fa08c27a6867624&units=metric')
.then((result) => {
    temp = result.data.main.temp;
    output.innerHTML = temp;   
    console.log(temp);
}).catch((err) => {
    console.log(err)
});