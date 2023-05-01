import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import axios from "axios";

const ButtonSaidaComponent = ({chave}: any) => {
    const navigate = useNavigate(); 

    async function funcaoBotao() {
        salvarSaida();
    }

    async function salvarSaida() {
        const response = await axios.post("http://localhost:3333/addPonto", {
            chave: chave,
            tipo: 2
        });

        console.log(response)

        let path = `/pontosEntrada/` + chave; 
        navigate(path);
    }


    return (
        <button onClick={funcaoBotao} className="buttonComponent">
            Hora de saída
        </button>
    );
};



export default ButtonSaidaComponent;