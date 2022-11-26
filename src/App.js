import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalstyle";
import Cart from "./pages/cart/Cart.js";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";

function App() {
  return (
    <>
      <GlobalStyle/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:productId" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
