import React, { useEffect, useState } from "react";
import "./home.css";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";

const Home = () => {
    
    const [chave, setChave] = useState('');

    

    const teste = (chave:any) => {
        setChave(chave);
      };

    return (
        <div className="containerHome">
            <h1 className="logo">Controle <span className="nomeLogo">Ponto</span></h1>

            <div className="inputComponent">
                <input type="text" placeholder="Código do usuário" className="inputChave" onChange={event => (teste(event.target.value))}/>
            </div>

            <ButtonComponent chave={chave} />
        </div>
    );
};



export default Home;