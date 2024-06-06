import axios from 'axios'

const API_URL = '/api/products/'

// Create new goal
const createProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, productData, config)

  return response.data
}

// Get user goals
const getProducts = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }

  const response = await axios.get(API_URL)
  // const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteProduct = async (productId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + productId, config)

  return response.data
}

const productService = {
  createProduct,
  getProducts,
  deleteProduct,
}

export default productService
