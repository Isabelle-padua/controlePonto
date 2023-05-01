export class PontoDTO {
    public chave: string;
    public dataHora: string;
    public tipo: number;

    constructor(chave: string, dataHora: Date, tipo: number) {
        this.chave = chave;
        this.dataHora = dataHora.toLocaleString('pt-BR', { timeZone: "America/Sao_Paulo" });
        this.tipo = tipo;
    }
}