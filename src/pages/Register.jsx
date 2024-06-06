import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { FaUser } from 'react-icons/fa'
import logo from '../assets/images/valleyView-logo.PNG'
import '../components/Styles.css'
// import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message)
  //   }

  //   if (isSuccess || user) {
  //     navigate('/')
  //   }

  //   dispatch(reset())
  // }, [user, isError, isSuccess, message, navigate, dispatch])
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      // dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='w-50 mx-auto'>
    <div>
    <img src={logo} height="90" width="90" className='rounded-circle loginLogo' alt='Logo'/>
    <h1 className='loginText'>Join Us</h1>
    </div>
    
    
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-full" onSubmit={onSubmit}>
    <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
      Full Name
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control" id="name"
     name='name' onChange={onChange} type="text" placeholder="John Doe" />
  </div>
    <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
      Email
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control" id="email"
     name='email' onChange={onChange} type="text" placeholder="email@example.com" />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
      Password
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control" id="password"
     name='password' onChange={onChange} type="password" placeholder="******************" />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
      Confirm Password
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control" id="password2"
     name='password2' onChange={onChange} type="password" placeholder="******************" />
  </div>
  <input type='submit' className='form-control btn btn-primary' /> 
  </form>
</div>
  )
}

export default Register
