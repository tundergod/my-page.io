const express = require('express')
const app = express()
const port = 8888 // 請改成其他你喜歡的數字

app.get('/get', function(req, res) {
    console.log("hihi");
    res.send(`<h1>Hello, ${req.query.name}</h1>`)
    })
    
app.listen(port)
