import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import { UsuarioService } from "../../services/UsuarioService";
import axios from "axios";

const ButtonComponent = ({chave}: any) => {
    const navigate = useNavigate(); 

    async function testar() {
        console.log("TENTOOOU")
        const response = await axios.post("http://localhost:3333/usuario", {
            chave: chave,
        });

        console.log(response)

        let path = `/pontos`; 
        navigate(path);
    }
    return (

        <button onClick={testar} className="buttonComponent">
            Confirmar
        </button>
    );
};



export default ButtonComponent;