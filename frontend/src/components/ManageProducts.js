import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ManageProducts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const fetchData = async () => {
    const res = await fetch("/products/");
    const data = await res.json();
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, []);


  const Edit = (id) => {
    <Link to={`/products/updateproduct`}></Link>
    navigate(`/products/${id}`)
  }
  return (
    <>
      <Navbar />
      <div className="manageProducts">
        <Link to="/addproducts"> <Button >Add Product</Button></Link>
        <Link className="btnn3" to="/deleteproducts"> <Button style={{ width: "150px" }}  > Delete Product </Button> </Link>
      </div>

      <div className="productCard">
        {data.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <img
                className="card-img-top"
                style={{ width: "150px" }}
                src={item.image}
                alt={item.title} height="150px"

                onClick={() => Edit(item._id)}
              />
              <div className="card-body">
                <h5 >{item.title}...</h5>
                <p className="card-text">Price: {item.price}</p>
                <p className="card-text">Rating: {item.rating}</p>

                <Link to={`/updateproducts/${item._id}`} className="btn btn-primary">
                  Update
                </Link>

              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default ManageProducts