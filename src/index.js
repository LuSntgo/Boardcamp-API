import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from '../src/Routes/index.js'

dotenv.config()

const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(5000, () => {
  console.log("Rodando em http://localhost:5000")
});