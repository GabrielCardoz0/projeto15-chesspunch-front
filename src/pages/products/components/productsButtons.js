import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import { DEFAULTCOLOR } from "../../../constants/colors.js";

export default function ProductsButtons() {

    const navigate = useNavigate();
    const [productQtd, setProductQtd] = React.useState(1);

    return(
        <ProductButtons>
            <div className="button">
                quantidade:
                {/* <input type="number" min={1} value={productQtd} onChange={e=> setProductQtd(e.target.value)}/> */}
                <span>
                    <span onClick={()=> productQtd <= 0? "" : setProductQtd(productQtd-1)}>- </span> {productQtd}<span onClick={()=> setProductQtd(productQtd+1)}> +</span>
                </span>
            </div>

            <button className="addCart">adicionar ao carrinho</button>
            <button className="buy">Comprar</button>
            <button className="cancel" onClick={() => navigate("/") }>Voltar</button>
        </ProductButtons>
    )
};

const ProductButtons = styled.div`
        display:flex;
        flex-direction:column;
        .button{
            width:130px;
            height:40px;
            margin: 0 auto;
            background-color:#fff;
            box-shadow:0 0 5px 0 #c6c6c6;
            margin-bottom:10px;
            border-radius:5px;
            font-size:15px;
            display:flex;
            justify-content:space-around;
            align-items:center;
            padding:10px;
            box-sizing:border-box;
        }
        input{
                border:none;
                width:40px;
            }
        button{
            width:200px;
            height:30px;
            margin-bottom:8px;
            font-weight:700;
            border-radius:5px;
            box-shadow:0 0 5px 0 #c6c6c6;
            cursor:pointer;
        }
        .buy{
            background-color:#fff;
            color:${DEFAULTCOLOR};
            border:2px solid ${DEFAULTCOLOR};
        }
        .addCart{
            background-color:#fff;
            color:yellow;
            border:2px solid yellow;
        }
        .cancel{
            background-color:#fff;
            color:red;
            border:2px solid red;
        }
    `;
