import { Container, FormContainer } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Login() {

    let history = useHistory();

    const [formLogin, setFormLogin] = useState({
        email: "",
        senha: ""
    })

    const handleInput = (e) => {
        setFormLogin({ ...formLogin, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("sessions", {
                email: formLogin.email,
                password: formLogin.senha
            });

            signIn(response.data);

            history.push("/home");
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                {formLogin.email}
                {formLogin.senha}
                <h1>Bem-Vindo ao</h1>
                <h1>SENAI-Overflow</h1>
                <Input label="E-mail" type="email" required id="email" handler={handleInput} />
                <Input label="Senha" type="password" required id="senha" handler={handleInput} />
                <button>Entrar</button>
                <Link to="/register">Cadastre-se</Link>
            </FormContainer>
        </Container>
    );
}

export default Login;