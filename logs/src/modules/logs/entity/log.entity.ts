import { v4 as uuid } from 'uuid';

export class Log {
    id: string;

    userId: string;
    log: string;
    
    constructor(){
        this.id = uuid();
    }
}