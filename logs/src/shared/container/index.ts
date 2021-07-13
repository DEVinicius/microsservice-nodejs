import { LogRepository } from './../../modules/logs/repositories/implementation/Log.repository';
import { container } from 'tsyringe';
import { ILogRepository } from '../../modules/logs/repositories/ILog.repository';

container.registerSingleton<ILogRepository>("LogRepository", LogRepository);