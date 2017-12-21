const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const massive = require('massive')
require('dotenv').config()

//DEPENDENCIES
const app = express()
app.use(cors())
app.use(json())



// DATABASE
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
})



//LISTEN
const port = process.env.PORT || 3005
app.listen(port, () => console.log(`Listening on port: ${port}`))