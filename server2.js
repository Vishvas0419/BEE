const express = require("express");
const app = express();

app.get('/profile', (req, res) => {
    const {username} = req.query;
    console.log(username);
    console.log("Hello from the profile page" + " " + username);
})

app.listen(3458, (req,res)=>{
    console.log("server started");
});