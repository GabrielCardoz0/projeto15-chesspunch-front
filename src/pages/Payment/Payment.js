import React from "react";
import { StyleScreen } from "../../assets/css/StyleScreen";
import Header from "../../components/header";
import Logo from "../../components/Logo";
import PaymentConfirm from "./components/PaymentConfirm/PaymentConfirm";
import PaymentForm from "./components/PaymentForm/PaymentForm";

export default function Payment() {

    const [popUpOn, setPopUpOn] = React.useState(false);
    const [compraFeita, setCompraFeita] = React.useState({})

    return (
        <>
            <Header />
            <StyleScreen>
                <Logo />
                <PaymentForm setPopUpOn={setPopUpOn} setCompraFeita={setCompraFeita}/>
                <PaymentConfirm compraFeita={compraFeita} popUpOn={popUpOn} setPopUpOn={setPopUpOn}/>
            </StyleScreen>

        </>
    )
}