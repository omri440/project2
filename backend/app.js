const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());


app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
res.setHeader("Access-Control-Allow-Method","GET, POST, DELETE, PATCH, OPTION")
next()
})

app.post('/api/post',(req,res,next) => {
    const post = req.body;
    console.log(post)
    res.status(201).json({message : 'post added succesfully'})

})

app.use('/api/post',(req,res,next) => {
    const posts = [{
        id:'213213213',
        name: 'post number 1',
        description:"test message number 1"
    },{
        id:'4213133dsfcs',
        name: 'post number 2',
        description:"test message number 1"
    },{
        id:'sadxzc12312',
        name: 'post number 3',
        description:"test message number 1"
    }]
    res.status(200).json({mssaege:"this is the post list",posts:posts})
})


module.exports = app;