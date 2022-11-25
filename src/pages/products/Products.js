import Header from "../../components/header";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";
import { URL } from "../../constants/URLS.js";

export default function Products() {

    const {productId} = useParams()

    const [productQtd, setProductQtd] = React.useState(0)

    const [productFind, setProductFind] = React.useState({})

    const navigate = useNavigate()



    useEffect(()=>{

        axios.get(`${URL}/productsfind/${productId}`).then(res=>setProductFind(res.data))

    },[productId])
    

    return(
        <>
        <Header/>
        <Background>
            <img src={productFind.image} alt=""/>
            <h1>{productFind.name}</h1>
            <p>{productFind.description}</p>
            <ProductButtons>
                <div>
                    Quantidade:
                    <div>
                    <span onClick={()=> setProductQtd(productQtd+1)}>+</span> {productQtd} <span onClick={()=> setProductQtd(productQtd-1)}>-</span>
                    </div>
                </div>
                <button>adicionar ao carrinho</button>
                <button>Comprar</button>
                <button onClick={() => navigate("/") }>Voltar</button>
            </ProductButtons>

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

const ProductButtons = styled.div`
        display:flex;
        flex-direction:column;
        div{
            margin: 0 auto;
            background-color:#fff;

            div{
                display:flex;
                justify-content:space-around;
                align-items:center;
            }
        }
        span{
            font-size:30px;
        }
    `;
