const express = require('express');

const app = express();
const PORT = 8000;

// routers
app.use('/', require('./routes'));

app.listen(PORT, function(err){
    if(err){
        console.log(`Error in connecting server ${err}`);
        return;
    }

    console.log(`Server is running on port: ${PORT}`);
})