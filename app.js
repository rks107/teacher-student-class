const express = require('express');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const  passportJWT = require('./config/passport-jwt-strategy');

const app = express();
const PORT = 8000;

app.use(express.urlencoded());
app.use(cookieParser());

// routers
app.use('/', require('./routes'));

app.listen(PORT, function(err){
    if(err){
        console.log(`Error in connecting server ${err}`);
        return;
    }

    console.log(`Server is running on port: ${PORT}`);
})