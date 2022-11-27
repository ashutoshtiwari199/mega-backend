const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;


exports.connect = ()=>{
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((msg)=>{
        console.log(`DB Connected successfully`)
    })
    .catch(err=>{
        console.log(`Error in DB connection: ${err}`)
        process.exit(1)
    })
}