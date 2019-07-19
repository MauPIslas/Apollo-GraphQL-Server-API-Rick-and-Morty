require('dotenv').config()

export const {
  APP_PORT = process.env.APP_PORT,
  DB_HOST = process.env.DB_HOST
} = process.env
