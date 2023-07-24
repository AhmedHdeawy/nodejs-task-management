const Task = require("../../Models/Task");
const { successResponse, errorResponse } = require("../../utils/apiResponse");
const asyncWrapper = require("../../utils/asyncWrapper");
const { modelNotFoundError } = require("../../utils/model-not-found");

const index = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(successResponse(tasks))
})


const store = async (req, res) => {
    try {
        const task = await Task.create(req.body)    
        res.status(201).json(successResponse(task, 'Task created successgully'))
    } catch (error) {
        res.status(500).json(errorResponse(error))
    }

}

const getTask = asyncWrapper(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        throw modelNotFoundError(`Task with id ${req.params.id} is not found`)
        const err = new Error(`Task with id ${req.params.id} is not found`)
        err.statusCode = 422
        throw err
        return res.status(500).json(errorResponse(`Task with id ${req.params.id} is not found`))
    }
    res.status(200).json(successResponse(task))
})

const update = async (req, res) => {
    try {
        
        const taskId = req.params.id;
        const task = await Task.findOneAndUpdate(
            { _id: taskId },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if (!task) {
            return res.status(500).json(errorResponse(`Task with id ${taskId} is not found`))
        }
        res.status(200).json(successResponse(task, 'updated successfully'))
    } catch (error) {
        res.status(500).json(errorResponse(error))
    }

}

const deleteTask = async (req, res) => {
    try {

        const taskId = req.params.id;
        const task = await Task.findOneAndDelete({ _id: taskId })
        if (!task) {
            return res.status(500).json(errorResponse(`Task with id ${taskId} is not found`))    
        }
        res.status(200).json(successResponse(task, 'deleted successfully'))
    } catch (error) {
        res.status(500).json(errorResponse(error))
    }

}

module.exports = {
    index,
    store,
    getTask,
    update,
    deleteTask
}