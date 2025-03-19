const axios = require("axios");

const geocode = (address, callback) => {
  debugger
  axios.get(`http://localhost:5000/geo/${address}`)
  .then(response => console.log(response.data)
)
  .catch(error => console.error("Error:", error));
}


geocode('Hyderabad', (error, data) =>{
debugger
 console.log(data);
})
