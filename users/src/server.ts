import "reflect-metadata";
import express, { json } from 'express';
import cors from 'cors';
import { userRoute } from './modules/user/user.routes';
import './shared/container/tsyringe'

const app = express();

app.use(json());
app.use(cors());

app.get("/", (request, response) => {
    console.log("!");
    
    return response.status(200).json({
        hello: "world"
    })
})

app.use("/user", userRoute);

app.listen('3333', () => {
    console.log("Server is Running PORT 3333")
})