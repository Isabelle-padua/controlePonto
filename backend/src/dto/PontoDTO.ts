export class PontoDTO {
    public chave: string;
    public dataHora: Date;
    public tipo: number;

    constructor(chave: string, dataHora: Date, tipo: number) {
        this.chave = chave;
        this.dataHora = dataHora;
        this.tipo = tipo;
    }
}