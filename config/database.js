const mongoose = require('mongoose');

exports.connectDatabase =  () => {
   mongoose.connect("mongodb://localhost:27017/itMabna").then(data =>{
       console.log(`database conncted on ${data.connection.host}`);
}).catch(err => {
    console.log(err);
})

}