const route = require('express').Router();
const {Hotel}= require('../db/db2');

route.get('/',(r,s)=>{
    s.send("HELLO");
})

route.get('/states/:city',(r,s)=>{
    Hotel.findAll({
        where:{
            state: r.params.city
        }
    })
        .then((result)=>s.send(result))
        .catch((err)=>s.send(err.message));
})

module.exports = route