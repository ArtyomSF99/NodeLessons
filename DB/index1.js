const express = require('express')
const db = require('./db')

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
     db.query("SELECT * FROM user", function(err, results) {
        if(err) console.log(err);
        console.log(results);
    })
    
})

app.listen(PORT)