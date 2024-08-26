import express from 'express'
import { newTask, getMyTasks, updateMyTask, deleteMyTask } from '../controllers/taskController.js'
import isAuthenticated from '../middleware/auth.js'

const taskRouter = express.Router()

taskRouter.post("/new", newTask)
taskRouter.get("/my", getMyTasks)
taskRouter.put("/update/:taskID", updateMyTask)
taskRouter.delete("/remove/:taskID", deleteMyTask)

export default taskRouter