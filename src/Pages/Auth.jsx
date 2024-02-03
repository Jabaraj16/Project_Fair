import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../assets/Images/loginImg.png'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import Spinner from 'react-bootstrap/Spinner';

function Auth({ insideRegister }) {
  const [spinnerStatus,setSpinnerStatus]=useState(false)
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    username: "", email: "", password: ""
  })
  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(userData);
    const { username, email, password } = userData
    if (!username || !email || !password) {
      toast.info("Please fill the form completly")
    } else {
      // toast.success("Registerd sucessfully")
      try {
        const result = await registerAPI(userData)
        console.log(result);
        if (result.status == 200) {
          toast.success(`${result.data.username} has sucessfully registered`)
          
          setUserData({ username: "", email: "", password: "" })
          setTimeout(() => {
            navigate("/login")
          }, 3000)
        } else {
          toast.warning("User Alredy exist !!")
        }
      } catch (err) {
        console.log(err);
      }
    }

  }
  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(userData);
    const { email, password } = userData
    if (!email || !password) {
      toast.info("Please fill the form completly")
    } else {
      try {
        const result = await loginAPI({ email, password })
        console.log(result);
        if (result.status == 200) {
          setSpinnerStatus(true)
          sessionStorage.setItem("username", result.data.existingUser.username)
          sessionStorage.setItem("token", result.data.token)
          setUserData({ email: "", password: "" })
          setTimeout(()=>{
            
            navigate("/")
          },3000)
          
        } else {
          toast.warning(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>

      <div className="container w-75">
        <Link style={{ color: 'green' }} to={'/'}><i class="fa-solid fa-arrow-left me-2"></i>  Back to Home</Link>
        <div className="card shadow p-5 bg-success">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className=' img-fluid' src={LoginImg} alt="login" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 className='fw-bolder text-light mt-2 '><i class="fa-brands fa-stack-overflow fa-bounce me-2"></i>Project Fair</h1>
                <h5 className='fw-bolder mt-2 pb-3 text-light'>
                  {insideRegister ? 'Sign up to your Account' : 'Sign In to your Account'}
                </h5>
                <Form className='w-100'>
                  {
                    insideRegister && (
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control onChange={e => setUserData({ ...userData, username: e.target.value })} value={userData.username} type="text" placeholder="Enter Username" />
                      </Form.Group>
                    )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setUserData({ ...userData, email: e.target.value })} value={userData.email} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} type="password" placeholder="Password" />
                  </Form.Group>
                  {
                    insideRegister ?
                      <div>
                        <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
                        <p>Already have an Account?Click here to <Link to={'/login'}>Login</Link></p>
                       
                      </div> :
                      <div>
                        <button onClick={handleLogin} className='btn btn-light mb-2'>Login</button>
                        {spinnerStatus &&
                          <Spinner className='ms-3' animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        }
                        <p>New User?Click here to <Link to={'/register'}>Register</Link></p>
                      </div>
                  }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored' />
    </div>
  )
}

export default Auth