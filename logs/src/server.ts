import "reflect-metadata";
import express, { json } from 'express';
import cors from 'cors';
import { logsRoutes } from './modules/logs/logs.routes';

const app = express();

app.use(json());
app.use(cors());

app.get("/", (request, response) => {
    return response.status(200).json({
        hello: "Appointment"
    })
})

app.use("log", logsRoutes);

app.listen('3333', () => {
    console.log("SERVER Logs IS RUNNING");
})