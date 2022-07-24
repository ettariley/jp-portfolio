import React, { useEffect, useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './home.css';

function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  });

  return (
    <Fade in={open}>
      <Container className='home'>
        <h1 className='p-3 text-center'>Hey! I'm Etta</h1>
        <Row className='justify-content-center'>
          <Column lg='5' md='6' className='text-center pb-2'>
            <Image className='img-fluid' roundedCircle='true' src={require('../../assets/headshot.jpg')} />
          </Column>
          <Column lg='5' md='6'>
            <h5>Full-Stack Web Developer in Bristol, Tennessee</h5>
            <p>With a background in social work and human resources, I bring a person-first perspective to everything I do.</p>
            <p>I'm open to working remote or locally in a developer position within a company that aims to make a positive impact on both its employees and its users. I'm open to freelance work as well.</p>
            <p>Interested? Check out my GitHub, LinkedIn, or Resume below. See my work, learn more about me, or contact me at the links above.</p>              
          </Column>
        </Row>
        <Row className='justify-content-center home-icons pb-2'>
          <Column xs='auto'>
            <a href='https://github.com/ettariley' title='My Github' target="_blank"><i className="bi bi-github hi"></i></a>
          </Column>
          <Column xs='auto'>
            <a href='https://www.linkedin.com/in/etta-r-baker/' title='My LinkedIn' target="_blank"><i className="bi bi-linkedin hi"></i></a>
          </Column>
          <Column xs='auto'>
            <a href={require('../../assets/Etta_Haselden_Resume.pdf')} download title='My Resume' target="_blank"><i className="bi bi-file-earmark-arrow-down-fill hi"></i></a>
          </Column>
        </Row>
      </Container>
    </Fade>
  );
}

export default Home;