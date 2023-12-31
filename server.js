const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const tasksRoutes = require('./Routes/tasks');
const dbConnection = require('./config/database/connection');
const routeNotFound = require('./Middlewares/route-not-found');
const errorHandler = require('./Middlewares/error-handler');
require('dotenv').config()

const app = express();


// Middlewares
// app.use(cors)
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Routes
app.use('/api/v1/tasks', tasksRoutes)
app.use(routeNotFound)
app.use(errorHandler)



// Configure and start the app
const start = async () => {
    try {
        // connect to db
        await dbConnection(process.env.MONGO_DB_URL)

        //  start the app
        app.listen(process.env.APP_PORT, () => {
            console.log(`the app has started and listen to ${process.env.APP_PORT} .....`);
        })
    } catch (error) {
        
    }
}

// Start the App
start()