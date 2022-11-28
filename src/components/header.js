import styled from "styled-components";
import { DEFAULTCOLOR } from "../constants/colors";
import cartImg from "../assets/images/shopping-cart-1768065.png"
import chess from "../assets/images/chess.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const [name, setName] = useState()

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        setName(null)
    }

    useEffect(()=>{
        if (localStorage?.getItem("name")){
            setName(localStorage.getItem("name"))
        }
    },[])
    return (
        <Logo>
            <Link to="/"><img src={chess} alt="" /></Link>

            {localStorage.getItem("token") ? (
                <>
                <h1> Olá, {name}</h1>
                <Link to="/">
                    <span onClick={logout}>logout</span>
                </Link >
                </>
            ) : (
                <Link to="/sing-in">
                    <div>Login</div>
                </Link>
            )}


            <Link to="/cart"> <img src={cartImg} alt="" /></Link>
        </Logo >
    )
};

const Logo = styled.div`
    background-color:${DEFAULTCOLOR};
    display:flex;
    justify-content:space-around;
    align-items:center;
    color: #fff;
    height:45px;
    img{
        width: 30px;;
        height:auto;
    }
    position:fixed;
    top:0;
    width:100vw;
    z-index:1;
`;
