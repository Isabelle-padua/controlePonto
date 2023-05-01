import React, { useEffect, useState } from "react";
import "./pontoSaida.css"
import ButtonSaidaComponent from "../../components/buttonComponent/ButtonSaidaComponent";
import ItemListaComponent from "../../components/ItemListaComponent/ItemListaComponent";
import { useParams } from "react-router-dom";
import axios from "axios";

const PontoSaida = () => {
    interface IPonto {
        chave: string;
        dataHora: Date;
        tipoValor: number;
    }

    const { chave } = useParams();
    const [listaPontos, setListaPontos] = useState<IPonto[]>([]);
    const [horaAtual, setHoras] = useState('');

    useEffect (() => {
        listarPontos();

        const dataAtual = new Date();
        const horas = dataAtual.getHours();
        const minutos = dataAtual.getMinutes();

        setHoras(horas + ':' + minutos);
    })

    async function listarPontos() {
        const chaveUsu = chave === undefined ? '' : chave;

        const response = await axios.get("http://localhost:3333/listaPontos", { params: {
            chave: chaveUsu,
            tipoValor: 2,
        }});

        setListaPontos(response.data);
    }

    return (
        <div className="containerPontos">
            <div className="infoCabecalho">
                <div className="textoInfo">Relógio de ponto</div>
                <div className="textoInfo">#F5D465A</div>
            </div>

            <div>
                <text className="horasTexto">{horaAtual}</text>
                <text className="textoInfo">Horas de hoje</text>
            </div>

            <ButtonSaidaComponent chave={chave}/>

            <div className="containerLista">
                <text className="textoInfo">Dias anteriores - Saída </text>
                {listaPontos.map((item) => (
                    <ItemListaComponent key={item.chave} item={item}/>
                ))}  
            </div>
        </div>
    );
};



export default PontoSaida;