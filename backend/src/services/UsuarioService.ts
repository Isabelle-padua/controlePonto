import { Prisma } from "@prisma/client";
import { Usuario } from "../entities/Usuario";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export class UsuarioService {

    async buscarPelaChave(chave: any) {

        const usuarioExistente:Usuario = await prisma.usuario.findUnique({where: { chave: chave }});

        if(!usuarioExistente) {
            const usu:Usuario = await prisma.usuario.create ({
                data: {
                    chave,
                }
            })
            return usu;
        }

        return usuarioExistente;
    }
}