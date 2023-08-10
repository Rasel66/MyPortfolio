const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//Dotenv configuration
dotenv.config();

//rest object configuration
const app = express();

//middleware configuration
app.use(cors());
app.use(express.json());

//router configuration
app.use('/api/v1/portfolio', require("./routes/route"));

//port configuration
const PORT = process.env.PORT || 8080

//listeners configuration
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
