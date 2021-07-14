import { Log } from './../entity/log.entity';
import { ICreateLogDto } from "./dto/ICreateLog.dto";

export interface ILogRepository {
    create(createLogDto:ICreateLogDto):Promise<Log>;
}