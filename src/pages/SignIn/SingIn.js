import { StyleScreen } from "../../assets/css/StyleScreen";
import Header from "../../components/header";
import SingInForm from "./components/SiginInForm";

export default function SingIn() {
    return (
        <>
            <Header />
            <StyleScreen>
                <h1>Login</h1>
                <SingInForm />
            </StyleScreen>
        </>

    )
}