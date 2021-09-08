import { useState } from "react";
import { Container } from "./pages/Login/styles";



function Teste() {

    const [Contador, setContador] = useState(0);

    const [nomes, setNomes] = useState([
        "Samuel", "Emerson", "Antonio", "Jean", "Brayan", "Carol", "Thamires"
    ]);


    return(
        <>
            <h1>{Contador}</h1>

            <ul>
                {nomes.map(nome => <li>{nome}</li>)}
            </ul>

            <button onClick={() => setContador(Contador + 1)}>Contar</button>
        </>
        // <input type="text" placeholder="Digite seu nome"/>
    );
}

export default Teste;