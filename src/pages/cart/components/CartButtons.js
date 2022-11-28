import { Link } from "react-router-dom";
import styled from "styled-components"
import { DEFAULTCOLOR } from "../../../constants/colors.js";

export default function CartButtons(params) {

    let total = 0;

    const list = params.list.map(o =>{
        return({price:Number(o.price.replace(",",".")), amount:Number(o.amount)})
    })

    list.map(o=> total = total+(o.price*o.amount))

    return(
        <Buttons>
            <div>Total: R${total.toFixed(2).replace(".",",")}</div>
            <Link to="/payment"><button className="done">Finalizar</button></Link>
            <Link to="/"><button className="backHome">Voltar a loja</button></Link>
        </Buttons>
    )
};

const Buttons = styled.div`
    margin-top:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    div{
        font-size:18px;
        font-weight:700;
        margin-bottom:12px;
        color:#333;
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
        .done{
            background-color:#fff;
            color:${DEFAULTCOLOR};
            border:2px solid ${DEFAULTCOLOR};
        }
        .backHome{
            background-color:#fff;
            color:yellow;
            border:2px solid yellow;
        }
`;
