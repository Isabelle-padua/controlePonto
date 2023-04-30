import { uuid } from "uuidv4";

export class Ponto {
    public readonly id: string;

    public chave: string;
    public dataHora: Date;
    public tipoValor: number;

    constructor(props: Omit<Ponto, 'id, dataHora'>, id?: string) {
        this.chave = props.chave;
        this.tipoValor = props.tipoValor;

        if(!id) {
            this.id = uuid();
            this.dataHora = new Date();
        }
    }
}