import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductsData } from "../redux/action/productsAction";

const Products = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const products = useSelector((store) => store.products.data);
  useEffect(() => {
    setData(products)
    dispatch(getProductsData());
  }, []);
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => {
      return x.category === cat;
    });
    setData(updatedList);
  };

  const Checkout = (id) => {
    <Link to={`/products/updateproduct`}></Link>;
    navigate(`/products/${id}`);
  };
  return (
    <>
      <Navbar />
      <div className="buttonsDiv">
        <button
          type="button"
          className="btn btn-secondary grdntBtn grdntBtn"
          onClick={() => {
            setData(data);
          }}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-secondary grdntBtn"
          onClick={() => {
            filterProduct("men's clothing");
          }}
        >
          Men
        </button>
        <button
          type="button"
          className="btn btn-secondary grdntBtn"
          onClick={() => {
            filterProduct("women's clothing");
          }}
        >
          Women
        </button>
        <button
          type="button"
          className="btn btn-secondary grdntBtn"
          onClick={() => {
            filterProduct("jewelery");
          }}
        >
          Jewelery
        </button>
        <button
          type="button"
          className="btn btn-secondary grdntBtn"
          onClick={() => {
            filterProduct("electronics");
          }}
        >
          Electronics
        </button>
      </div>
      <div className="productCard">
        {data.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <img
                className="card-img-top"
                style={{ width: "150px" }}
                src={item.image}
                alt={item.title}
                height="150px"
                onClick={() => Checkout(item._id)}
              />
              <div className="card-body">
                <h5>{item.title}...</h5>
                <p className="card-text">Price: {item.price}</p>
                <p className="card-text">Rating: {item.rating}</p>

                <Link
                  to={`/products/${item._id}`}
                  className="btn btn-primary grdntBtn"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
