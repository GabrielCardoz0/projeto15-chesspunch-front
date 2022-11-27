import styled from "styled-components";

export const StyleFormAuth = styled.form `
    display:flex;
    box-sizing:border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
    max-width:326px;
    margin: 0 auto;


    input{
        box-sizing:border-box;
        padding: 15px;
        height: 58px;
        border: unset;
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        width:100%
    }

    button{
        box-sizing:border-box;
        padding: 15px;
        height: 58px;
        border: unset;
        border-radius: 5px;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        background: #9CE6AE;
        width:100%
    }

    a{
        box-sizing:border-box;
        padding: 15px;
        height: 58px;
        border: unset;
        border-radius: 5px;
        font-weight: 700;
        font-size: 20px;
        background: #FFFFFF;
        color: #9CE6AE;
        width:100%;
        text-align: center; 
        text-decoration: none;
    }
`