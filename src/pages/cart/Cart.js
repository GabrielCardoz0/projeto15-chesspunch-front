import React from "react";
import styled from "styled-components";
import Header from "../../components/header.js";
import CartButtons from "./components/CartButtons.js";
import CartProducst from "./components/CartProducst.js";

export default  function Cart() {
    const itens = JSON.parse(localStorage.getItem("itensList"))
    const [ProductsList,setProductsList] = React.useState(itens)

    return(
        <>
            <Header/>
            <Background>
                <CartProducst list={ProductsList} setProductsList={setProductsList}/>
                <CartButtons list={itens} setProductsList={setProductsList}/>  
            </Background>
        </>
    )
};

const Background = styled.div`
    margin-top:45px;
    background-color:#f1f1f1;
    position:relative;
    min-height:100vh;
    padding:15px;
    box-sizing:border-box;

`;
