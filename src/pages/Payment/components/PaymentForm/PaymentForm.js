import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyleFormAuth } from "../../../../assets/css/StyleFormAuth";

export default function PaymentForm(params) {

    const {setPopUpOn,setCompraFeita} = params
    

    const [method, setMethod] = useState("")
    const [num, setNum] = useState("")
    const [adress, setAdress] = useState("")
    const [city, setCity] = useState("")
    const [estado, setEstado] = useState("")
    const [numCreditCard, setNumCreditCard] = useState("")
    const [securytCode, setSecurytCode] = useState("")
    const [validate, setValidate] = useState("")


    const confirmation = (num!=="" || (securytCode !== "" && numCreditCard.length!=="" && validate.length!=="") ) && (adress!=="" && city !=="" && estado !=="")


    // const navigate = useNavigate()

    function methodPayment(e) {
        e.preventDefault()
        const methodSelectd = e.target.value
        setMethod(methodSelectd)
        if (methodSelectd === "boleto" || methodSelectd === "pix") {
            setNum(Math.floor(Math.random() * 12345678912345));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (method === "boleto" || method === "pix"){
            const object = {
                method,
                num,
                adress,
                city,
                estado
            }
            setCompraFeita(object)
        }
    

    }

    return (
        <div>

            <h1><strong>Selecione o método de pagamento</strong></h1>
            <div onChange={methodPayment}>
                <input
                    type="radio"
                    value="boleto"
                    name="method"
                /> Boleto
                <input
                    type="radio"
                    value="pix"
                    name="method"
                /> PIX

                <input
                    type="radio"
                    value="creditCard"
                    name="method"
                /> Cartão de Crédito

            </div>
            <StyleFormAuth onSubmit={handleSubmit}>
                <br></br>
                <h1><strong> Informações de Pagamento</strong></h1>

                {method === "boleto" && <> Número Boleto: {num}</>}
                {method === "pix" && <>Chave Pix: {num}</>}
                {method === "creditCard" &&
                    <>
                        <input
                            name="creditCard"
                            type="num"
                            maxLength="16"
                            minLength="16"
                            value={numCreditCard}
                            placeholder="Numéro do cartão"
                            onChange={(e) => setNumCreditCard(e.target.value)}
                            required
                        />
                        <input
                            name="CodeCreditCard"
                            type="num"
                            value={securytCode}
                            maxLength="3"
                            minLength="3"
                            placeholder="Código de Segurança"
                            onChange={(e) => setSecurytCode(e.target.value)}
                            required

                        />

                        <input
                            name="validate"
                            type="text"
                            value={validate}
                            maxLength="7"
                            minLength="7"
                            placeholder="Validade do cartão: mm/aaaa"
                            onChange={(e) => setValidate(e.target.value)}
                            required

                        />
                    </>

                }
                <br></br>
                <h1>
                    Informações para Entrega
                </h1>
                <input
                    name="adress"
                    type="text"
                    value={adress}
                    placeholder="Endereço (Rua, Av.)"
                    onChange={(e) => setAdress(e.target.value)}
                    required

                />

                <input
                    name="city"
                    type="text"
                    value={city}
                    placeholder="Cidade"
                    onChange={(e) => setCity(e.target.value)}
                    required

                />

                <input
                    name="state"
                    type="text"
                    value={estado}
                    placeholder="Estado"
                    maxLength="2"
                    onChange={(e) => setEstado(e.target.value)}
                    required

                />

                <button onClick={()=> confirmation? setPopUpOn(true):alert("dados incompletos.")}>Enviar</button>
                <div>
                    <Link to="/">Cancelar</Link>
                </div>
            </StyleFormAuth>


        </div>
    )

}