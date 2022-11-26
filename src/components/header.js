import styled from "styled-components";
import { DEFAULTCOLOR } from "../constants/colors";
import cartImg from "../assets/images/shopping-cart-1768065.png"
import chess from "../assets/images/chess.png"
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <Logo>
            <Link to="/"><img src={chess} alt=""/></Link>

            <div>Ola, user</div>

            <Link to="/cart"> <img src={cartImg} alt=""/></Link>
        </Logo>
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
