const express = require('express');
const app = express();
const mysql = require('mysql');

const PORT = 6600;

//Bypass CORS.
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//Server initilize
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});