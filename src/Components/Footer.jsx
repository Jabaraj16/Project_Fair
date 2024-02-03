import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='text-white bg-success'>
      <div className='d-flex justify-content-between container mt-4 ' style={{ height: '250px' }}>
        <div style={{ width: '350px' }}>
          <h4 className='text-white'><i class="fa-brands fa-stack-overflow fa-bounce"></i>&nbsp;Project Fair</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt tempora ipsam molestiae odio corporis corrupti eius. Consequatur eligendi odit accusantium laborum debitis architecto. Repellat iusto porro obcaecati reiciendis quibusdam dicta!</p>
        </div>
        <div style={{ width: '200px' }}>
          <h4 className='text-white'>Links</h4>
          <p><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></p>
          <p><Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>Login</Link></p>
          <p><Link to={'/register'} style={{ textDecoration: 'none', color: 'white' }}>Register</Link></p>
        </div>
        <div style={{ width: '200px' }}>
          <h4 className='text-white'>Guides</h4>
          <p><a href="" className='text-decoration-none text-white ' >React</a></p>
          <p><a href="" className='text-decoration-none text-white '>React Bootstrap</a></p>
          <p><a href="" className='text-decoration-none text-white '>React Routing</a></p>
        </div>
        <div style={{ width: '350px' }}>
          <h4 className='text-white'>Contact Us</h4>
          <div className='d-flex'>
            <input placeholder='Enter Your E-mail' type="text" className="form-control" />
            <button className='btn btn-dark ms-3'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='fs-4 overflow-y-hidden  text-white d-flex justify-content-between mt-3'>
            <i class="fa-solid fa-envelope"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <p className='text-center'>Copyright &copy; 2023 Media Player.Built With React</p>
    </div>
  )
}

export default Footer