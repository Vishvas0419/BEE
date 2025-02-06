const express = require("express");
const app = express();

app.get('/profile', (req, res) => {
    const {username} = req.query;
    console.log(username);
    res.send("Hello from the profile page" + " " + username);
})

app.listen(3458, (req,res)=>{
    res.send("server started");
});
