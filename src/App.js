import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Checkout1 from "./Pages/Checkout1";
import Checkout2 from "./Pages/Checkout2";
import Checkout3 from "./Pages/Checkout3";
import { CartProductProvider } from "./AppContext";

function App() {
  return (
    <CartProductProvider>
      <BrowserRouter basename="/Modeva">
        <div className="App items-center">
          <Routes>
            {/* Default now shows Cart */}
            <Route path="/cart" element={<Cart />} />

            {/* You can move LandingPage to another route */}
            <Route path="/" element={<LandingPage />} />

            <Route path="/products" element={<Products />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout/step1" element={<Checkout1 />} />
            <Route path="/checkout/step2" element={<Checkout2 />} />
            <Route path="/checkout/step3" element={<Checkout3 />} />

            {/* Fallback */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProductProvider>
  );
}

export default App;
