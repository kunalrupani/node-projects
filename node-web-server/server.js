const express = require('express');

var app=express();

app.get('/', (req, res)=>{

    res.send('Hello express Kunal');

});

app.listen(3000);