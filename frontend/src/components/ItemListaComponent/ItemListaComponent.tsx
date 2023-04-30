import React from "react";
import "./style.css"

const ItemListaComponent = (item: any) => {

    return (
        <div className="itemListaContainer">
            <text className="textoData">{item.item.data}</text>
            <text className="textoHora">{item.item.hora}</text>
        </div>
    );
};



export default ItemListaComponent;