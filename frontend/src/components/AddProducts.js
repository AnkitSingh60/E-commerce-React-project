import React, { useState } from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const addProductHandler = async () => {
    if (!id) {
      setError(true)
      return false;
    }

    console.log('===>:', id, title, category, description, price, rating, image)

    let result = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({ id, title, category, description, price, rating, image }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log('result33:', result)
    if (result) {
      alert("Product added")
      navigate("/manageproducts")
    }
  }
  return (
    <>
      <Navbar />
      <div className="addProductContainer">

        <input onChange={(e) => { setId(e.target.value) }} value={id} type="text" className="form-control input" placeholder="Product id" />
        {error && !id && <span className="inputError">Enter a valid id</span>}
        <input onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" className="form-control input" placeholder="Product Name" />
        {error && !title && <span className="inputError">Enter a valid name</span>}
        <input onChange={(e) => { setCategory(e.target.value) }} value={category} type="text" className="form-control input" placeholder="Product Category" />
        {error && !category && <span className="inputError">Enter a valid category</span>}
        <input onChange={(e) => { setDescription(e.target.value) }} value={description} type="text" className="form-control input" placeholder="Product Description" />
        {error && !description && <span className="inputError">Enter a valid description</span>}
        <input onChange={(e) => { setImage(e.target.value) }} value={image} type="text" className="form-control input" placeholder="Add Product Image" />
        {error && !image && <span className="inputError">Not a valid image URL</span>}
        <input onChange={(e) => { setPrice(e.target.value) }} value={price} type="text" className="form-control input" placeholder="Product Price" />
        {error && !price && <span className="inputError">Enter valid price</span>}
        <input onChange={(e) => { setRating(e.target.value) }} value={rating} type="text" className="form-control input" placeholder="Product Rating" />
        {error && !rating && <span className="inputError">Enter valid rating</span>}
        <button onClick={addProductHandler} className="btn btn-primary newbtn ">Submit</button>

      </div>
    </>
  )
}

export default AddProducts