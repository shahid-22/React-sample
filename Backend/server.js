const express = require('express');
const app = express();
require('dotenv').config();

const dbconfig=require('./config/dbconfig')
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`server connected to ${PORT}`);
});