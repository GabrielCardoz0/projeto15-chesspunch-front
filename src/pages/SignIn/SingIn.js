import { StyleScreen } from "../../assets/css/StyleScreen";
import Header from "../../components/header";
import Logo from "../../components/Logo";
import SingInForm from "./components/SiginInForm";


export default function SingIn() {
    return (
        <>
            <Header />
            <StyleScreen>
            <Logo />
                <h1>Login</h1>
                <SingInForm />
            </StyleScreen>
        </>

    )
}