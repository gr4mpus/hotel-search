const express= require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'static')));

app.use('/a', require('./routes/route'));

app.listen(5555,()=>console.log("localhost:5555") );