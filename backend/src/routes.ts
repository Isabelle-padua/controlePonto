import { Router, response } from "express";
import { PontoService } from "./services/PontoService";
import { UsuarioService } from "./services/UsuarioService";

const router = Router()

const pontoService = new PontoService();
const usuarioService = new UsuarioService();

router.post('/usuario', (request, response) => {
    const { chave } = request.body;
    usuarioService.buscarPelaChave(chave).then((usuario) => {
        console.log("ROUTER" + usuario);
        return response.status(201).json(usuario);
    });  
});

router.post('/addPonto', (request, response) => {
    const { chave, tipo } = request.body;

    pontoService.addPonto(chave, tipo).then(() => {
        return response.status(201).json("Ponto salvo");
    })
})

router.get("/listaPontos", (request, response) => {
    const {chave, tipoValor} = request.query; 

    //console.log(request.query)
    pontoService.listarPontos(chave, tipoValor).then((pontos) => {
        return response.status(200).json(pontos);
    })
})

export { router }