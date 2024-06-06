import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../features/products/productSlice'
import download  from '../assets/images/photo.png'
import axios from 'axios'

const CreateRoom = () => {

   
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
      name:"",
      description:"",
      price:""
    })

      const navigate = useNavigate()
      const dispatch = useDispatch()

      const onChangeHandler = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData(data=>({...data, [name]:value}))
      }

      const onSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name" , data.name)
        formData.append("description" , data.description)
        formData.append("price" , data.price)
        formData.append("image" , image)
        // dispatch(createProduct({ formData }))
        // setData([])
        // // setDescription('')
        // setImage(false)
        // console.log(formData)
        // const response = await axios.post('http://localhost:5000/api/products', formData)
        dispatch(createProduct( formData ))
        if(formData){
          setData({
            name:"",
            description:"",
            price:"",

          })
          setImage(false)
        }
      }
      
    
  return (
    <div className='container'>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-full" onSubmit={onSubmit}>
    <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
      Full Name
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control" id="name"
     name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Product Title" />
  </div>
    <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
    Description
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control" id="description"
     name='description' onChange={onChangeHandler} value={data.description} type="text" placeholder="description" />
  </div>

  <div className="mb-6">
    <p>Image Upload</p>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
    <img src={image ? URL.createObjectURL(image) : download} alt='' />
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control" id="image"
     name='image' onChange={(e) => setImage(e.target.files[0])} type="file" hidden required/>
  </div>

  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
    Price
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control" id="price"
     name='price' onChange={onChangeHandler} value={data.price} type="number" />
  </div>
 
  <input type='submit' className='form-control btn btn-primary' /> 
  </form>
    </div>
  )
}

export default CreateRoom
