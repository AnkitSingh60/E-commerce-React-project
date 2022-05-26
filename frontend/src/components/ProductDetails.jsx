import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    // console.log("Heyy kiddo");
  };

  const getProduct = async () => {
    const res = await fetch(`/products/${params.id}`);
    const result = await res.json();
    setProduct(result);
  };

  let RatingStar = <i className="fa fa-star"></i>;

  useEffect(() => {
    // console.log("paramssss:", params);

    getProduct();
  }, []);
  const ShowProduct = () => {
    return (
      <>
        <div className="mainContainer">
          <div className="left">
            <img src={product.image} alt={product.image} />
          </div>

          <div className="right">
            <div className="boxA">
              <h3>{product.category}</h3>
              <h1>{product.title}</h1>

              <h3>Price: ₹{product.price}</h3>
              <h5>
                Rating {product.rating}
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </h5>
              <h6 className="desc">{product.description}</h6>
              <button
                className="btn btn-primary"
                onClick={() => addProduct(product)}
              >
                Add to cart
              </button>

              <Link to="/cart" className="btn btn-outline-dark">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <ShowProduct />
    </>
  );
};

export default ProductDetails;
