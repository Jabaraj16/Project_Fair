import React, { useState } from 'react'
import { Card, Modal, Row, Col } from 'react-bootstrap'


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '25rem' }} className='shadow btn mb-5' onClick={handleShow}>
        <Card.Img variant="top" src="https://image.slidesdocs.com/responsive-images/slides/0-green-atmospheric-city-project-planning-book-powerpoint-background_71037cae73__960_540.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img className='img-fluid' style={{ height: '250px' }} src="https://image.slidesdocs.com/responsive-images/slides/0-green-atmospheric-city-project-planning-book-powerpoint-background_71037cae73__960_540.jpg" alt="" />
            </Col>
            <Col md={6}>
              <h2 className='fw-bolder text-dark'>Project Title</h2>
              <p>Project Overview : <span className='fw-bolder' style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos autem sed, vitae doloremque minus beatae fuga obcaecati assumenda nobis corrupti, a quasi eum ad ex explicabo voluptate nam saepe ratione.</span> </p>
              <p>Language Used : <span className='fw-bolder text-danger'>HTML,JS,CSS</span> </p>
            </Col>
          </Row>
          <div className='mt-3'>
            <a href="https://github.com/Shamilxmhd/baskinrobbins" target='_blank' className='btn me-3'> <i style={{ height: '40px' }} className='fa-brands fa-github fa-2x'></i> </a>
            <a href="http://sample.org/" target='_blank' className='btn me-3'>
              <i style={{ height: '40px' }} className='fa-solid fa-link fa-2x'></i> </a>

          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ProjectCard