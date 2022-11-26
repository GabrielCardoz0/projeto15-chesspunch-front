import { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import Sections from "./components/Sections";


export default function Home() {
    useEffect((()=> localStorage.setItem(JSON.stringify([]))),[])
    
    return(
        <>

            <Header/>
            <Background>
                <Sections/>
            </Background>
        </>
    )
};

const Background = styled.div`
    background-color:#f1f1f1;
    position:relative;
    margin-top:45px;
    padding:10px;
    min-height:100vh;
`;
