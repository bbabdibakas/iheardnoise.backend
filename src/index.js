const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler');
const delayInjector = require('./middlewares/delayInjector');

// initialize environment variables
dotenv.config()
const PORT = process.env.PORT || 8001

// creating express app
const app = express()

// for parsing incoming requests with JSON payload
app.use(express.json())
// to enable cors
app.use(cors())
// delay to simulate reallife server behaviour
app.use(delayInjector);

app.use('/', router);
// middleware for errors
app.use(errorHandler);

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