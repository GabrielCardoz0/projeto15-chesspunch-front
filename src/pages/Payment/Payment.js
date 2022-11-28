import { StyleScreen } from "../../assets/css/StyleScreen";
import Header from "../../components/header";
import Logo from "../../components/Logo";
import PaymentForm from "./components/PaymentForm/PaymentForm";

export default function Payment() {
    return (
        <>
            <Header />
            <StyleScreen>
                <Logo />
                <PaymentForm />
            </StyleScreen>

        </>
    )
}