import { StyleLogo } from "../assets/css/StyleLogo";
import logo from "../assets/images/chess.png"

export default function Logo() {
    return (
        <StyleLogo>
            <img src={logo} alt="logo"></img>
            <h1> Chess Punch</h1>
        </StyleLogo>
    )
}