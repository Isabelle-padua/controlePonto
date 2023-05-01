import React from "react";
import "./style.css"

const ItemListaComponent = (item: any) => {

    return (
        <div className="itemListaContainer">
            <text className="textoData">{item.item.dataHora}</text>
            <text className="textoHora">{item.item.horaHora}</text>
        </div>
    );
};



export default ItemListaComponent;