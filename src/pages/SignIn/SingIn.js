import { StyleLogo } from "../../assets/css/StyleLogo";
import { StyleScreen } from "../../assets/css/StyleScreen";
import Header from "../../components/header";
import SingInForm from "./components/SiginInForm";
import logo from "../../assets/images/chess.png"

export default function SingIn() {
    return (
        <>
            <Header />
            <StyleScreen>
                <StyleLogo>
                    <img src={logo}></img>
                    <h1> Chess Punch</h1>
                </StyleLogo>
                <h1>Login</h1>
                <SingInForm />
            </StyleScreen>
        </>

    )
}