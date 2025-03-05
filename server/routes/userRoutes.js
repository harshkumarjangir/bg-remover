import express from 'express'
import { clerkWebHooks } from '../controllers/UserController.js'

const userRoutes = express.Router()

userRoutes.post('/webhooks', clerkWebHooks)

export default userRoutes