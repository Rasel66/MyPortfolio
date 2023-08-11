require("dotenv").config()
const express = require("express");
const app = express();
const cors = require('cors')
require ('./db/conn')
const router = require('./routes/router');
const port = 6002;

app.use(cors())
app.use(express.json())
app.use(router);

app.get('/',(req, res)=>{
    res.status(201).json('server starts')
})

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})