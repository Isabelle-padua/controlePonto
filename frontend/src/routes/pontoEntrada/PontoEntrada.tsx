import React, { useEffect, useState } from "react";
import "./pontoEntrada.css"
import ButtonEntradaComponent from "../../components/buttonComponent/ButtonEntradaComponent";
import ItemListaComponent from "../../components/ItemListaComponent/ItemListaComponent";
import { useParams } from "react-router-dom";
import axios from "axios";


const PontoEntrada = () => {

    interface IPonto {
        chave: string;
        dataHora: string;
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

        console.log("TESTEEE" + chaveUsu);

        const response = await axios.get("http://localhost:3333/listaPontos", { params: {
            chave: chaveUsu,
            tipoValor: 1,
        }});

        setListaPontos(response.data);
    }

    return (
        <div className="containerPontos">
            <div className="infoCabecalho">
                <div className="textoInfo">Relógio de ponto</div>
                <div className="textoInfo">{chave}</div>
            </div>

            <div>
                <text className="horasTexto">{horaAtual}</text>
                <text className="textoInfo">Horas de hoje</text>
            </div>

            <ButtonEntradaComponent chave={chave} />

            <div className="containerLista">
                <text className="textoInfo">Dias anteriores - Entrada</text>
                {listaPontos.map((item) => (
                    <ItemListaComponent key={item.chave} item={item}/>
                ))}  
            </div>
        </div>
    );
};



export default PontoEntrada;