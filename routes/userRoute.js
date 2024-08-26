import express from 'express'
import { getMyProfile, login, logout, register } from '../controllers/userController.js'
import isAuthenticated from '../middleware/auth.js'

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.get('/login', login)
userRouter.get('/logout', logout)
userRouter.get('/me', isAuthenticated, getMyProfile)

export default userRouter