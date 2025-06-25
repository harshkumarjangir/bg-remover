import express from 'express'
import { aman, clerkWebHooks } from '../controllers/UserController.js'

const userRoutes = express.Router()

userRoutes.post('/webhooks', clerkWebHooks)
userRoutes.get('/webhooks', clerkWebHooks)
userRoutes.get('/aman', aman)

export default userRoutes