import { Log } from './../../entity/log.entity';
import { ICreateLogDto } from "../dto/ICreateLog.dto";
import { ILogRepository } from "../ILog.repository";

export class LogRepository implements ILogRepository {
    private logRepository:Log[];

    constructor() {
        this.logRepository = [];
    }

    async create(createLogDto: ICreateLogDto): Promise<Log> {
        const log = new Log();

        Object.assign(log, createLogDto);
        this.logRepository.push(log);

        return log;
    }
}