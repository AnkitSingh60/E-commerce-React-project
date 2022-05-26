import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, delCart } from "../redux/action";
import Navbar from "./Navbar";

const Cart = () => {
  const state = useSelector((state) => state.mycart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="emptyDiv">
        <div>
          <div>
            <img
              src="https://www.apnashopping.in/assets/img/payment/Empty-Cart.jpg"
              alt="Empty cart"
            />
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="cartMainDiv">
          <div className="">
            <div className="">
              <div className="">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="">
                <h3>{product.title}</h3>
                <p className="">
                  {product.qty} X ₹{product.price} = ₹
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="checkBtnDiv">
          <Link to="/checkout" className="checkBtn">
            Proceed to Checkout
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div>
        {state.length !== 0 && buttons()}
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
      </div>
    </>
  );
};

export default Cart;
