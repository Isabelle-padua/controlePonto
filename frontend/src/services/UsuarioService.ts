import { Api } from "../providers";

const criarUsuario = (data: string) => Api.post('/usuario', data)

export const UsuarioService = {
    criarUsuario
};