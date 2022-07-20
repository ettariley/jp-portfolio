import React, { useEffect, useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './contact.css';

function Contact() {
 const [showModal, setShowModal] = useState(false);
 const [open, setOpen] = useState(false);

 const showContactSubmittedModal = () => {
  setShowModal(true);
 };

  const hideContactSubmittedModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setOpen(true);
  });

  return (
    <Fade in={open}>
      <Container className='contact'>
        <h2 className='pt-3 text-center'>Contact Me</h2>
        <p className='pb-3 fs-5 text-center'>Think we would work well together? Let me know!</p>
        <Row>
          {/* Contact deatils */}
          <Column md='6' lg='5' className='ms-auto'>
            <Row>
              <p className='fs-5'><i className="bi bi-geo-alt-fill ci"></i> Bristol, TN Area or Remote</p>
            </Row>
            <Row>
              <p>
                <a href='mailto:ettahaselden@gmail.com' title='Email Me' target="_blank" className='aci fs-5'><i className="bi bi-envelope-fill ci"></i> Send me an email (ettahaselden@gmail.com)</a>
              </p>
            </Row>
            <Row>
              <p>
                <a href='tel:423-438-7569' title='Call Me' className='aci fs-5'><i className="bi bi-telephone-fill ci"></i> Give me a call (423-438-7569)</a>
              </p>
            </Row>
          </Column>

          {/* Contact form */}
          <Column md='6' className='contact-form pt-3 pb-4 ps-4 pe-4'>
            <Form>
              <Form.Group className="mb-3" controlId="contactFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Your Name"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Your Message" rows={3} />
              </Form.Group>
            </Form>
            <Button variant="primary contact-btn" type="submit" onClick={showContactSubmittedModal}>
              Submit
            </Button>
          </Column>
        </Row>
        
        {showModal ? (
          <Modal show={showModal} onHide={hideContactSubmittedModal} className='contact-modal'>
            <Modal.Dialog className='contact-modal-dialog'>
              <Modal.Header closeButton>
                <Modal.Title>Thanks!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>I'll reach out to you soon.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={hideContactSubmittedModal}>Close</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal>
        ) : null}
      </Container>
    </Fade>
  );
}

export default Contact;