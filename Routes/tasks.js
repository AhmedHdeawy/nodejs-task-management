const express = require('express')
const { 
    index,
    store,
    update,
    deleteTask,
    getTask
} = require('../Controllers/Api/TasksController')

const tasksRoutes = express.Router()

// Define the routes
tasksRoutes.route('/').get(index).post(store)
tasksRoutes.route("/:id").get(getTask).put(update).delete(deleteTask)



module.exports = tasksRoutes