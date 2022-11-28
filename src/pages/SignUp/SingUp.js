import { StyleScreen } from "../../assets/css/StyleScreen";
import Header from "../../components/header";
import Logo from "../../components/Logo";
import SingUpForm from "./components/SiginUpForm";



export default function SingUp() {
    return (
        <>
            <Header />
            <StyleScreen>
            <Logo />
                <h1>Cadastrar</h1>
                <SingUpForm />
            </StyleScreen>
        </>

    )
}