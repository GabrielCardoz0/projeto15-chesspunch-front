import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyleFormAuth } from "../../../assets/css/StyleFormAuth";
import { URL } from "../../../constants/URLS";

export default function SingUpForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            return alert("Senhas não conferem")
        }

        try {
            await axios.post(`${URL}/sing-up`,
                {
                    name,
                    email,
                    cpf,
                    password
                })
            alert("Cadastro realizado!")
            navigate("/")
        } catch (error) {
            console.log(error)
            alert("Cadastro não realizado, tente novamente")
        }
    }


    return (
        <StyleFormAuth onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                value={name}
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                name="email"
                type="email"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                name="cpf"
                type="number"
                value={cpf}
                placeholder="CPF (somente números)"
                onChange={(e) => setCpf(e.target.value)}
                required
            />

            <input
                type="password"
                name="password"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
            />

            <input
                type={"password"}
                name={"confirmPassword"}
                value={confirmPassword}
                placeholder="Confirme a senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="onSubmit">Cadastrar</button>
            <div>
                <Link to="/sing-in">Login</Link>
                <Link to="/">Cancelar</Link>
            </div>
        </StyleFormAuth>
    )
}