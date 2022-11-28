import { DEFAULTCOLOR } from "../../../../constants/colors";
import styled from "styled-components"
import axios from "axios";
import { URL } from "../../../../constants/URLS";

export default function PaymentConfirm(params){

    const {popUpOn,compraFeita,setPopUpOn} = params;

    const listItens = JSON.parse(localStorage.getItem("itensList"))
    const token = localStorage.getItem("token")

    let totalValue = 0;

    const valores = listItens.map(o =>{
        return({price:Number(o.price.replace(",",".")), amount:Number(o.amount)})
    })
    
    valores.map(o => totalValue = totalValue+(o.price*o.amount))


    async function buyItens(){
        try{
            const config = {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }

            const objetoCompra = {
                arrProducts:listItens,
                ...compraFeita,
                total:totalValue
            }

            axios.post(URL+"/confirm/order", objetoCompra, config).then(res => alert("compra efetuada.")).catch(err => alert("Erro. Compra não efetuada"))


        } catch (err){
            console.log(err);
        }
    }
    

    if(popUpOn){
        return(
            <PopUp>
                <ul>
                    <h1>Lista de compra</h1>
                    {listItens.map((o,ind)=>{
                        return(
                            <li key={ind}>
                                <h2>{o.name}. R${o.price}</h2> 
                            </li>
                        )
                    })}
                </ul>
                <div>
                    Total: R${totalValue.toFixed(2)}
                </div>
                <div>
                    <button onClick={buyItens}>confirmar compra</button>
                    <button onClick={()=>setPopUpOn(false)}>cancelar</button>
                </div>
            </PopUp>
        )
    }
    
}

const PopUp = styled.div`
    background-color:#FFF;
    margin:0 auto;
    width:80%;
    max-width:320px;
    position:fixed;
    top:35%;
    border-radius:5px;
    padding:10px;
    border: 3px solid ${DEFAULTCOLOR};
    box-shadow:0 0 5px 0 #c6c6c6;
    div{
        display:flex;
        justify-content:center;
        margin-top:10px;
    }
    button{
        width:100px;
        margin:0 auto;
        font-weight:700;
        border-radius:5px;
        cursor:pointer;
    }
    li{
        padding:5px;
        h2{
            font-size:14px;
        }
    }
`;