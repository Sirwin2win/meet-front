import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom';
import logo from '../assets/images/valleyView-logo.PNG'
import '../components/Styles.css'
// import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { PaystackButton } from 'react-paystack'

function Order() {
    const {id} = useParams();
  const publicKey = "pk_live_b1a9dfb7ccca1b8c108427d5505dc5f9b2eb1dbd"
  const amount = id 
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount : amount*100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thank you for choosing ValleyView Hotel! Enjoy Your Stay!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img />
          <div className="item-details">
            {/* <p></p> */}
            <p>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  )
}


export default Order
