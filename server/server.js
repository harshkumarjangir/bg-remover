import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'

// App Config
const PORT = process.env.PORT || 4000

// Initializing the  Instance
const app = express()
await connectDB()

// Initialize Middleware
app.use(express.json()) // Whenever we get any request on the server then it will be parsed using the json() method.
app.use(cors()) // By using cors we can connect our client running on that is running on the different port to the backend server.

// API Routes
app.get('/', (req, res) => res.send('API Working'))
app.use('/api/user', userRouter)

// Listening App
app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))