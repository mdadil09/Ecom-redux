import { Route, Routes } from "react-router";
import "./App.css";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Orders from "./Pages/Orders";
import SingleProducts from "./Pages/SingleProducts";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import AuthPage from "./Pages/AuthPage";
import ProtectedRoute from "./Auth/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="/productDetails/:id" element={<SingleProducts />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
