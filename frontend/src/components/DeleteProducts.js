import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from './Navbar';

const DeleteProducts = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/products/");
    const data = await res.json();
    setData(data)
  }
  // console.log('data:', data)


  const DeleteProd = async (id) => {
    // console.log("hey kiddo");
    let result = await fetch(`/products/${id}`, {
      method: 'DELETE'
    });
    result = await result.json();
    if (result) {
      fetchData()
    }
  }

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <>
      <Navbar />
      <div className="productCard">
        {data.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <img
                className="card-img-top"
                style={{ width: "150px" }}
                src={item.image}
                alt={item.title} height="150px"
              />
              <div className="card-body">
                <h5 >{item.title}...</h5>
                <p className="card-text">Price: {item.price}</p>
                <p className="card-text">Rating: {item.rating}</p>

                <button onClick={() => DeleteProd(item._id)} className="btn btn-primary  ">Delete</button>
              </div>
            </div>
          );
        })}
      </div>

    </>
  )
}

export default DeleteProducts