import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const server = express()

server.use(cors())
server.use(json())


server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})