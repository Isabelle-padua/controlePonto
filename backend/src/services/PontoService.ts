import { Ponto } from "../entities/Ponto";
import { PontoDTO } from "../dto/PontoDTO";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export class PontoService {

    async addPonto(chave:any, tipoValor:any) {
        await prisma.ponto.create ({
            data: {
                chave: chave,
                tipoValor: tipoValor,
            }
        })
    }

    async listarPontos(chave:any, tipoValor:any):Promise<PontoDTO[]> {

        const tipo = parseInt(tipoValor);
        const listaPontos: Ponto[] = await prisma.ponto.findMany({where: { chave: chave, tipoValor: tipo }});
        const listaPontosDTO: PontoDTO[] = [];

        listaPontos.forEach((val) => {
            const pontoDTO = new PontoDTO(val.chave, val.dataHora, val.tipoValor);
            listaPontosDTO.push(pontoDTO);
        })

        return listaPontosDTO;
    }
}