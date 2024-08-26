import express from 'express'
import userRouter from './routes/userRoute.js'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import taskRouter from './routes/taskRoute.js'
import isAuthenticated from './middleware/auth.js'
import errorMiddleware from './middleware/error.js'

export const app = express()

config({path: "./data/config.env"})

//middleware
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    Credentials: true, 
}))

//using routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/task', isAuthenticated, taskRouter)

app.use(errorMiddleware)

app.get('/', (req, res) => {
    res.send("hello")
})
