import styled from "styled-components"
import GlobalStyle from "../../../assets/css/globalstyle";
import axios from "axios";
import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sections() {

        const [productsList, setProductsLists] = React.useState([]);

        const navigate = useNavigate()

        useEffect(()=>{
            const url = "http://localhost:5000/products"
            axios.get(url).then(res => setProductsLists(res.data))
        },[]);



        function liItem(obj){
            return(
                <li key={obj.price}>
                    <img src={obj.image} alt="" onClick={()=> navigate(`/product/${obj.name}`)}/>
                    <h2> {obj.name} </h2>
                    <p>R${obj.price}</p>
                </li>
            )
        };

    return(
        <SectionsList>
            <GlobalStyle/>
            <Section>
                <h1>Tabuleiros</h1>
                <ul>
                    {productsList.map(o => o.type === "board"? liItem(o):"")}
                </ul>
            </Section>

            <Section>
                <h1>peças</h1>
                <ul>
                    {productsList.map(o => o.type === "pieces"? liItem(o):"")}
                </ul>
            </Section>

            <Section>
                <h1>Kits</h1>
                <ul>
                    {productsList.map(o => o.type === "kit"? liItem(o):"")}
                </ul>
            </Section>
        </SectionsList>
    )
};

const SectionsList = styled.div`
    max-width:80vw;
    width:600px;
    margin:0 auto;
`;

const Section = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:25px;
    h1{
        font-size:20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight:700;
    }
    ul{
        display:flex;
        flex-wrap:wrap;
    }
    li{
        margin: 5px 10px 10px 10px;
        background-color:#FFF;
        padding:5px;
        border-radius:2px;
        box-shadow:0 0 5px 0 #c6c6c6;
    }
    img{
        width:120px;
        height:120px;
    }
    p{
        font-size:16px;
        width:120px;
        font-weight:700;
    }
    h2{
        font-size:12px;
        width:120px;
    }
`;
