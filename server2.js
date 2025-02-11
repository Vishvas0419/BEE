const express = require("express");
const app= express();

app.get("/getProfile",(req,res)=>{
    const {username,age} = req.query;
    res.send("Profile"+ " "+username + " "+age);
})
// app.get("/profile/:username",(req,res)=>{
//     const {username} = req.params;
//     res.send("Hi"+ " "+username);
// })
app.get("/profile/:username/:age",(req,res)=>{
        const {username,age} = req.params;
        res.send("Hi"+ " "+username + " "+ age);
    })
app.listen(2345,()=>{
    console.log("server started")
})
