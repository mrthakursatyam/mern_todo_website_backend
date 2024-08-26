import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, unique: false, required: true},
    isCompleted: {type: Boolean, default: false},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: false},
    createdAt: {type: Date, default: Date.now()}
})

const Task =  mongoose.model("Task", taskSchema)

export default Task