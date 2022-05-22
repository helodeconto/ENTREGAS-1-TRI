import * as fs from 'node:fs'

export interface IObjetoGenerico {
    [key: string]: any
}

export abstract class Entidade {
    protected _dados: IObjetoGenerico = {}
    
    constructor() {}

    load() {}

    store() {
        const dadosString = JSON.stringify(this._dados)
        // @todo: mudar para assíncrono
        fs.writeFileSync("teste.txt", dadosString)
    }

    delete() {}
}