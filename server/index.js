import express from 'express'
import { PORT } from '#config'
import { PrismaClient } from '@prisma/client'

const app = express()

// Verify the database connection
const prisma = new PrismaClient()

await prisma.$connect()
  .then(async () => {
    await prisma.$disconnect()
    console.log('Succesful database connection')
  })
  .catch((err) => {
    console.error(`Error connecting to the database: ${err}`)
  })

// Middlewares

app.use(express.json)

// Routes

app.get('/', async (req, res) => {
  res.send('Response from the server')
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
