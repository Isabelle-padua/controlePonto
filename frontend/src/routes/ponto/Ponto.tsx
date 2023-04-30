import React from "react";
import "./ponto.css"
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import ItemListaComponent from "../../components/ItemListaComponent/ItemListaComponent";

const Ponto = () => {
    const arrayList = [
        { chave: "teste", data: "05/05", hora: "00:00"},
        { chave: "teste2", data: "06/05", hora: "00:00"},
    ]

    return (
        <div className="containerPontos">
            <div className="infoCabecalho">
                <div className="textoInfo">Relógio de ponto</div>
                <div className="textoInfo">#F5D465A</div>
            </div>

            <div>
                <text className="horasTexto">0h 00m</text>
                <text className="textoInfo">Horas de hoje</text>
            </div>

            <ButtonComponent />

            <div className="containerLista">
                <text className="textoInfo">Dias anteriores</text>
                {arrayList.map((item) => (
                    <ItemListaComponent key={item.chave} item={item}/>
                ))}  
            </div>
        </div>
    );
};



export default Ponto;