import React from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject'

function MyProject() {
  return (
    <div className='card shadow p-3'>
      <div className="d-flex justify-content-between">
        <h2>My Projects</h2>
        <div>
          <AddProject />
        </div>
      </div>
      <div className='mt-4'>
        <div className="border rounded d-flex align-items-center text-danger justify-content-between mb-3 p-2">
          <h5>Project Title</h5>
          <div className="d-flex icons align-items-center">
            <EditProject />
            <a target='_blank' className='btn' href="https://github.com/Shamilxmhd"><i style={{ height: '34px' }} className='fa-brands fa-github fa-2x'></i> </a>
            <button className='btn'><i style={{ height: '34px' }} className='fa-solid fa-trash fa-2x'></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProject