require('dotenv').config()
const express = require('express')
const CookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes')
const todoRoutes = require('./routes/todoRoutes')

const port = process.env.PORT;
const apiurl = `/api/v1`;
const app = express();





// middleware
app.use(express.json());
app.use(CookieParser());
app.use(express.urlencoded({extended: true}))


// Routes
app.use(apiurl, userRoutes);
app.use(apiurl, todoRoutes);


// DBConnection
require("./config/db.connection").connect()


// Server start
app.listen(port, ()=>{
    console.log('APP started at: ', port)
})
