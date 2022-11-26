import React from "react"
import styled from "styled-components"
import trashImg from "./trash.png"


export default function CartProducst(params) {
    const [itensList,setItensList] = React.useState(params.list);
    const {setProductsList} = params;
    
    function itemMap(item,i){
        return(
            <li key={i}>
                <img src={item.image} alt=""/>

                <div>
                    <h1>{item.name}</h1><br/>
                    <h2>Preço: R${item.price} Qtd.:{item.amount}</h2>
                </div>

                <img onClick={()=>eraserItem(i)} className="trash" src={trashImg} alt=""/>
            </li>
        )
    }

    function eraserItem(i){
        const newItensList = itensList.filter((o,ind)=> ind !== i);
        setItensList(newItensList);
        //setar no localstorage o novo array de itens
        localStorage.setItem("itensList", JSON.stringify(newItensList) )
        setProductsList(newItensList)
    }


    return(
        <ProductsList>
            <ul>
                {itensList.map((item,i)=> itemMap(item,i))}
            </ul>
        </ProductsList>
    )
};

const ProductsList = styled.div`
    display:flex;
    justify-content:center;
    li{
        background-color:#FFF;
        min-height:80px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-radius:2px;
        border:3px solid #fff;
        max-width:400px;
        margin-bottom:10px;
        .trash{
            width:20px;
            height:auto;
            margin-right:5px;
        }
        div{
            margin-right:10px;
        }
        img{
            width:40px;
            height:40px;
            margin-right:15px;
        }
        h1{
            font-size:18px;
        }
        h2{
            font-size:15px;
            color:#333;
        }
    }
`
