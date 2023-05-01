import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import axios from "axios";

const ButtonComponent = ({chave}: any) => {
    const navigate = useNavigate(); 

    const [chaveUsu, setChaveUsu] = useState('');

    async function funcaoBotao() {
        salvarChave();
    }

    async function salvarChave() {
        console.log("entou salvarrr")
        const response = await axios.post("http://localhost:3333/usuario", {
            chave: chave,
        });

        setChaveUsu(response.data.chave);
        console.log(response);

        let path = `/pontosEntrada/` + chave; 
        navigate(path);
    }

    return (
        <button onClick={funcaoBotao} className="buttonComponent">
            Confirmar
        </button>
    );
};



export default ButtonComponent;