import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./LandingPage/Login";
import Register from "./LandingPage/Register";
import PrivateComponent from "./components/PrivateComponent";
import AddProducts from "./components/AddProducts";
import ManageProducts from "./components/ManageProducts";
import DeleteProducts from "./components/DeleteProducts";
import UpdateProducts from "./components/UpdateProduct";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateComponent />}>
          <Route path="/products" element={<Products />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/manageproducts" element={<ManageProducts />} />
          <Route path="/deleteproducts" element={<DeleteProducts />} />
          <Route path="/updateproducts/:id" element={<UpdateProducts />} />
          <Route path="/logout" element={"<Logout/>"} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
