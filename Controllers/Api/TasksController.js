const Task = require("../../Models/Task");
const { successResponse, errorResponse } = require("../../utils/apiResponse");
const asyncWrapper = require("../../utils/asyncWrapper");
const { modelNotFoundError } = require("../../utils/model-not-found");

const index = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(successResponse(tasks))
})


const store = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(successResponse(task, 'Task created successgully'))
})

const getTask = asyncWrapper(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        throw modelNotFoundError(`Task with id ${req.params.id} is not found`)
    }
    res.status(200).json(successResponse(task))
})

const update = asyncWrapper(async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate(
        { _id: taskId },
        req.body,
        { new: true, runValidators: true }
    )
    if (!task) {
        throw modelNotFoundError(`Task with id ${req.params.id} is not found`)
    }
    res.status(200).json(successResponse(task, 'updated successfully'))
})

const deleteTask = asyncWrapper(async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
        throw modelNotFoundError(`Task with id ${req.params.id} is not found`)
    }
    res.status(200).json(successResponse(task, 'deleted successfully'))
})

module.exports = {
    index,
    store,
    getTask,
    update,
    deleteTask
}