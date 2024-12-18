import dotenv from 'dotenv'
dotenv.config()

export const {
  PORT = 8000,
  DATABASE_URL = ''
} = process.env
