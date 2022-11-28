import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalstyle";
import Cart from "./pages/cart/Cart.js";
import Home from "./pages/home/Home";
import PaymentConfirm from "./pages/Payment/components/PaymentConfirm/PaymentConfirm";
import Payment from "./pages/Payment/Payment";
import Products from "./pages/products/Products";
import SingIn from "./pages/SignIn/SingIn";
import SingUp from "./pages/SignUp/SingUp";

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="/sing-up" element={<SingUp />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentConfirm" element={<PaymentConfirm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
