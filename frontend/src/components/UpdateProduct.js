import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProducts = () => {
  const [data, setData] = useState("")
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("")
  const params = useParams()
  const navigate = useNavigate()

  const getProduct = async () => {
    let res = await fetch(`/products/${params.id}`);
    let result = await res.json();
    setData(result)

    setId(result.id)
    setTitle(result.title)
    setCategory(result.category)
    setDescription(result.description)
    setImage(result.image)
    setPrice(result.price)
    setRating(result.rating)

  }
  const addProductHandler = async () => {
    let result = await fetch(`/products/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ id, title, category, description, price, rating, image }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    // console.log('result33:', result)
    if (result) {
      alert("Product updated sucessfully")
      navigate("/manageproducts")
      UpdateProducts()
    }
  }

  useEffect(() => {
    // console.log('params:', params.id)
    getProduct()
  }, [])


  return (
    <>
      <Navbar />
      <div className="addProductContainer">

        <input onChange={(e) => { setId(e.target.value) }} value={id} type="text" className="form-control input" />
        <input onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" className="form-control input" />
        <input onChange={(e) => { setCategory(e.target.value) }} value={category} type="text" className="form-control input" />
        <input onChange={(e) => { setDescription(e.target.value) }} value={description} type="text" className="form-control input" />
        <input onChange={(e) => { setImage(e.target.value) }} value={image} type="text" className="form-control input" />
        <input onChange={(e) => { setPrice(e.target.value) }} value={price} type="text" className="form-control input" />
        <input onChange={(e) => { setRating(e.target.value) }} value={rating} type="text" className="form-control input" />
        <button onClick={addProductHandler} className="btn btn-primary newbtn ">Submit</button>

      </div>
    </>
  )
}

export default UpdateProducts