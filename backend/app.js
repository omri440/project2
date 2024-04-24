const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./module/post");
const mongoose = require("mongoose");
const app = express();



mongoose.connect("mongodb+srv://omriking:52Aw7ATnEXGbUufq@omricluster.jzzawnx.mongodb.net/?retryWrites=true&w=majority&appName=omricluster"
).then(() => {
    console.log('connected') 
})  
.catch((error) => {
    console.log('get the follow error:',error) 
}) 
 



app.use(bodyParser.json());



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Method",
    "GET, POST, DELETE, PATCH, OPTION"
  );
  next();
});

app.post("/api/post", (req, res, next) => {
  const post = new Post({
    name: req.body.name,
    description: req.body.description,
  });
  console.log(post);
  res.status(201).json({ message: "post added succesfully" });
});

app.use("/api/post", (req, res, next) => {
  const posts = [
    {
      id: "213213213",
      name: "post number 1",
      description: "test message number 1",
    },
    {
      id: "4213133dsfcs",
      name: "post number 2",
      description: "test message number 1",
    },
    {
      id: "sadxzc12312",
      name: "post number 3",
      description: "test message number 1",
    },
  ];
  res.status(200).json({ mssaege: "this is the post list", posts: posts });
});

module.exports = app;
