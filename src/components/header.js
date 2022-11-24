import styled from "styled-components";
import { DEFAULTCOLOR } from "../constants/colors";

export default function Header() {
    return(
        <Logo>
            <img src="" alt=""/>

            <div>Ola, user</div>

            <img src="" alt=""/>
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
