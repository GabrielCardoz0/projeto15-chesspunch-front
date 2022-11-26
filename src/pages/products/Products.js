import Header from "../../components/header";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";
import { URL } from "../../constants/URLS.js";
import ProductsButtons from "./components/productsButtons";

export default function Products() {

    const {productId} = useParams();
    const [productFind, setProductFind] = React.useState({});

    useEffect(()=>{

        axios.get(`${URL}/productsfind/${productId}`).then(res=>setProductFind(res.data))

    },[])


    return(
        <>
        <Header/>
        <Background>
            <img src={productFind.image} alt=""/>
            <h1>{productFind.name}</h1>
            <p>{productFind.description}</p>
            <p>Preço: R${productFind.price}</p>
            <ProductsButtons/>
        </Background>
        </>
    )
};

const Background = styled.div`
    background-color:#f1f1f1;
    margin-top:45px;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    min-height:100vh;
    padding:20px;
    img{
        width:200px;
        height:200px;
        margin-bottom:15px;
        box-shadow:0 0 5px 0 #c6c6c6;
    }
    h1{
        font-size:20px;
        color:#a8a8a8;
        margin-bottom:15px;
        font-weight:700;
    }
    p{
        font-size:16px;
        font-weight:400;
        margin-bottom:15px;
    }
    `;
