import express from 'express'
import { getMyProfile, login, logout, register, updateProfile } from '../controllers/userController.js'
import isAuthenticated from '../middleware/auth.js'

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/logout', logout)
userRouter.get('/me', isAuthenticated, getMyProfile)
userRouter.put('/update', isAuthenticated, updateProfile)

export default userRouter