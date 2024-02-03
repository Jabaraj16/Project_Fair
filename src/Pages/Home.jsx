import React, { useEffect, useState } from 'react'
import landingImg from '../assets/Images/landingImg.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify';


function Home() {
  const [isLogin,setIsLogin]=useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])
  const handleProjectPage = ()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')

    }else{
      toast.warning("Please login to  view our Project !!")
    }
  }
  return (
    <>
      {/* landing part */}
      <div className='bg-success rounded ' style={{ height: '100vh', width: '100%' }}>
        <div style={{ height: '100%' }} className='container'>
          <div style={{ height: '100%' }} className="row align-items-center">
            <div className="col-lg-6">
              <h1 className='fw-bolder text-light pt-5' style={{ fontSize: '70px' }}><i class="fa-brands fa-stack-overflow fa-bounce"></i>
                Project Fair</h1>
              <p>One stop Destination for all software Development Project. Where User can add and manage their projects.As well as access all projects available iin our website... What are you waiting for!!!</p>
              {
                isLogin?<Link className="btn btn-warning" to={'/dashboard'}>Manage your projects <i class="fa-solid fa-arrow-right ms-1"></i></Link>:
                <Link className="btn btn-warning" to={'/login'}>Starts to Explore <i class="fa-solid fa-arrow-right ms-1"></i></Link>
              }
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <img className='img-fluid' src={landingImg} alt="No Image" />
            </div>
          </div>
        </div>
      </div>
      {/* all projects */}
      <div className="projects mt-5">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee >
          <div className="d-flex justify-content-between">
            <div className="me-5">
              <ProjectCard />
            </div>
          </div>
        </marquee>
        <div className='text-center'>
          <button onClick={handleProjectPage} className='btn btn-link'>View More Projects</button>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored'  />
    </>

  )
}

export default Home