import React from 'react'
import { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import '../components/Styles.css'


const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState('');

    useEffect (()=>{
        const fetchProduct = async ()=>{
            try {
              const res = await axios.get(`http://localhost:5000/api/products/${id}/`);
              console.log(res)
              setProduct(res.data);
            } catch (error) {
              console.log('Error fetching data', error);
            }
      
          }
          fetchProduct();
        });



  return (
    <div className='container'>
      
      <div className="row">
        <div className="col">
      <div className="card">
  <img className="product-detail" src={'http://localhost:5000/images/'+product.image} alt="" />
  </div></div>
  <div className="col">
  <div className="card-body">
    <h4 className="card-title" key={product._id}>{product.name}</h4>
    <p className="card-text" key={product._id}>{product.description}</p>
    {/* <p className="card-text" key={product._id}>₦<span className='mx-1'>{product.price}</span></p> */}
    <Link to={`/order/${product.price}`}><Button variant="primary">Book Now, ₦<span className='mx-1'>{product.price}</span></Button></Link>
  </div></div>
</div>
    </div>
    
  )
}

export default ProductDetail
