import { CreateLogController } from './useCases/createLog/createLog.controller';
import { Request, request, Response, Router } from 'express';

const createLogController = new CreateLogController()

const logsRoutes = Router();

logsRoutes.post("/", createLogController.handle);

export {logsRoutes};