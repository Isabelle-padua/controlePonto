import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import axios from "axios";

const ButtonEntradaComponent = ({chave}: any) => {
    const navigate = useNavigate(); 

    async function funcaoBotao() {
        
        salvarEntrada();
    }

    async function salvarEntrada() {
        const response = await axios.post("http://localhost:3333/addPonto", {
            chave: chave,
            tipo: 1
        });

        console.log(response)

        let path = `/pontosSaida/` + chave; 
        navigate(path);
    }


    return (
        <button onClick={funcaoBotao} className="buttonComponent">
            Hora de entrada
        </button>
    );
};



export default ButtonEntradaComponent;