import { v4 as uuid } from 'uuid';

export class Alerta {
    readonly id = uuid()
    constructor(
        readonly message: string,
        readonly tipo:string,

    ) { }
}