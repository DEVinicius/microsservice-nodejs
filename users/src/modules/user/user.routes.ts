import { CreateUserController } from './useCase/createUser/createUser.controller';
import { Router } from "express";

const createUserController = new CreateUserController();

const userRoute = Router();

userRoute.post("/", createUserController.handle)

export {userRoute}