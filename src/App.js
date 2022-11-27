import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalstyle";
import Cart from "./pages/cart/Cart.js";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import SingIn from "./pages/SignIn/SingIn";

function App() {
  return (
    <>
      <GlobalStyle/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:productId" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/sing-in" element={<SingIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
