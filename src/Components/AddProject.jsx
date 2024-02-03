
import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import uploadImage from '../assets/images/uploadimage.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';
function AddProject() {
  const [show, setShow] = useState(false);
  const [previewImage, setPreviewImage] = useState("")
  const [fileStatus, setFileStatus] = useState(false)
  const [projectData, setProjectData] = useState({
    title: "",
    language: "",
    overview: "",
    github: "",
    website: "",
    projectImage: ""
  })
  console.log(projectData);
  useEffect(() => {
    if (projectData.projectImage.type == "image/png" || projectData.projectImage.type == "image/jpg" || projectData.projectImage.type == "image/jpeg") {
      console.log("generate image url");
      setPreviewImage(URL.createObjectURL(projectData.projectImage))
      setFileStatus(false)
    } else {
      console.log("*please upload file with following extensions (png,jpg,jpeg) only*");
      setFileStatus(true)
      setProjectData({ ...projectData, projectImage: "" })
      setPreviewImage("")
    }

  }, [projectData.projectImage])
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setProjectData({
      title: "",
      language: "",
      overview: "",
      github: "",
      website: "",
      projectImage: ""
    })
  };

  const handleAdd=async()=>{
    const {title,overview,github,website,language,projectImage}=projectData
    if(!title|| !overview || !github || !website || !language || !projectImage){
      toast.info("Please upload form completly")
    }else{
      //api call-body
      const reqBody=new FormData()
      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImage",projectImage)
      

      //api call-header
      const token=sessionStorage.getItem("token")
      console.log(token);
      if(token){
        const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }

        try{
          const result= await addProjectAPI(reqBody,reqHeader)
          if(result.status===200){
            handleClose()
          }
          else{
            toast.warning(result.response.data)
          }
        }catch(err){
          console.log(err);
        }
      }
    }
  }

  return (
    <>
      <button onClick={handleShow} className='btn btn-success d-flex align-items-center '><i className='fa-solid fa-plus'></i>Add projects</button>
      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label className="text-center">
                <input onChange={e => setProjectData({ ...projectData, projectImage: e.target.files[0] })} style={{ display: "none" }} type="file" />
                <img
                  className='w-100'
                  src={previewImage ? previewImage : uploadImage}
                  alt="upload image"
                  style={{ cursor: 'pointer' }}
                />
              </label>
              {
                fileStatus &&
                <div className='text-danger mt-2'>*please upload file with following extensions (png,jpg,jpeg) only*</div>
              }
            </div>
            <div className="col-lg-6">
              <div className='mb-3'>
                <input type="text" onChange={e => setProjectData({ ...projectData, title: e.target.value })} value={projectData.title} className='form-control' placeholder='Project Title' />
              </div>
              <div className='mb-3'>
                <input type="text" onChange={e => setProjectData({ ...projectData, language: e.target.value })} value={projectData.language} className='form-control' placeholder='language Used' />
              </div>
              <div className='mb-3'>
                <input type="text" onChange={e => setProjectData({ ...projectData, github: e.target.value })} value={projectData.github} className='form-control' placeholder='Project Github Link' />
              </div>
              <div className='mb-3'>
                <input type="text" onChange={e => setProjectData({ ...projectData, website: e.target.value })} value={projectData.website} className='form-control' placeholder='Project Website Link' />
              </div>
              <div className='mb-3'>
                <input type="text" onChange={e => setProjectData({ ...projectData, overview: e.target.value })} value={projectData.overview} className='form-control' placeholder='Project Overview' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={3000} theme="colored" position="top-center" />
    </>
  )
}

export default AddProject