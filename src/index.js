const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')

//initialize environment variables
dotenv.config()
const PORT = process.env.PORT || 8001

//creating express app
const app = express()

//for parsing incoming requests with JSON payload
app.use(express.json())
//to enable cors
app.use(cors())

//for test
app.get('/', (req, res) => {
    res.send('hello world')
  })

const start = async () => {
    try {
        //start server
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start() 