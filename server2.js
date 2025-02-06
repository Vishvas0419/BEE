const express = require("express");
const app = express();

// app.get('/profile', (req, res) => {
//     const {username,age} = req.query;
//     console.log(username);
//     res.send("Hello from the profile page" + " " + username + " " + age);
// })

app.get("/profile/:id/:username", (req, res) =>{
    const {id,username} = req.params;
    res.send(Profile page with id: ${id} & username: ${username});
})

app.listen(3477, (req, res)=>{
    console.log("server started");
});
