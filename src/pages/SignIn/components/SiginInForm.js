import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyleFormAuth } from "../../../assets/css/StyleFormAuth";
import { URL } from "../../../constants/URLS";

export default function SingInForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const body = {
            email,
            password
        }

        console.log(body)
        try {
            const res = await axios.post(`${URL}/auth/sing-in`, body);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.name);
            navigate("/");
        } catch (error) {
            alert("Senha e/ou usuário incorreto")
        }
    }

    return (
        <StyleFormAuth onSubmit={handleSubmit}>

            <input
                name="email"
                type="email"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                name="password"
                type="password"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
                <button type="onSubmit">Entrar</button>
            <div>
                <Link to="sing-up">Cadastre-se aqui</Link>
                <Link to="/">Voltar</Link>
            </div>
        </StyleFormAuth>
    )
}