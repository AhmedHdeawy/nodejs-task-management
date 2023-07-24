const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const tasksRoutes = require('./Routes/tasks');
const dbConnection = require('./config/database/connection');
require('dotenv').config()



const app = express();
// app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static('./public'))
// Routes
app.use('/api/v1/tasks', tasksRoutes)



// Configure and start the app
const start = async () => {
    try {
        // connect to db
        await dbConnection(process.env.MONGO_DB_URL)

        //  start the app
        app.listen(5002, () => {
            console.log('the app has started and listen to 5002 .....');
        })
    } catch (error) {
        
    }
}

// Start the App
start()