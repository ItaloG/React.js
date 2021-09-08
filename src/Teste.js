import { useState } from "react";
import { Container } from "./pages/Login/styles";



function Teste() {

    const [Contador, setContador] = useState(0);

    const [nomes, setNomes] = useState([
        "Samuel", "Emerson", "Antonio", "Jean", "Brayan", "Carol", "Thamires"
    ]);

    const [nome, setNome] = useState("");

    const handleSend = () => {
        setNomes([...nomes, nome])

        setNome("")
    }

    return(
        <>
            <h1>{Contador}</h1>

            <ul>
                {nomes.map(nome => <li>{nome}</li>)}
            </ul>

            <button onClick={() => setContador(Contador + 1)}>Contar</button>
            <br/>
            <input type="text" onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome"/>
            <br/>
            <button onClick={() => setNome("")}>Limpar</button>
            <button onClick={handleSend}>Enviar</button>
            <h2>{nome}</h2>
        </>
    );
}

export default Teste;