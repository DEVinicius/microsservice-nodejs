import {v4 as uuid} from 'uuid'

export class User {
    id: string;

    name: string;
    email:string;
    createdAt: Date;

    constructor() {
        this.id == uuid();
        this.createdAt = new Date();
    }

}