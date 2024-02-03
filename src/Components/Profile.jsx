
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import UploadImg from '../assets/Images/UploadImg.png'


function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="d-flex rounded p-2 justify-content-between">
        <h2>Profile</h2>
        <button onClick={() => setOpen(!open)} className='btn btn-outline-warning'><i className='fa-solid fa-chevron-down'></i></button>
      </div>
      <Collapse in={open}>
        <div className='row shadow p-5 justify-content-center mt-3' id="example-collapse-text">
          <label className='text-center'>
            <input style={{ display: 'none' }} type="file" />
            <img className='rounded-circle' style={{ width: '200px', height: '200px' }} src={UploadImg} alt="Upload image" />

          </label>
          <div className='mt-3'>
            <input placeholder='Enter Your Github URL' type="text" className='form-control' />
            <input placeholder='Enter Your LinkedIn URL' type="text" className='form-control mt-2' />
            <div className="mt-3 d-grid">
              <button className='btn btn-warning'>Update</button>
            </div>
          </div>

        </div>
      </Collapse>
    </>
  )
}

export default Profile