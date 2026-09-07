
import express, { type ErrorRequestHandler, type Express, } from "express"
import cors from "cors"
import helmet from "helmet";
import { EnvVars } from "./config/env.js";
import { Routes } from "./routes/index.js";

const app: Express = express();

app.use(helmet())

app.use(cors({
  origin: EnvVars.CLIENT_URL,
  credentials: true
}))

app.disable("x-powered-by");

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));



app.use("/api/v1",Routes)


app.get('/', (_req, res) => {
  res.json({
    "success": true,
    "message": "API is working"
  })
})

app.get('/health', (_req, res) => {
  res.status(200).json({ status: "ok" })
})

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: "Not Found",
    message: "The requested resource does not exist."
  })
})

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error(error);
   
  res.status(500).json({
    success: false,
    error: "Internal server error",
    message: "Something went wrong"
  })
}
app.use(errorHandler);


export default app;