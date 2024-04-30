import React, { useEffect, useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './about.css';

function About() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  });

  return (
    <Fade in={open}>
      <Container className="about">
        <h2 className="pt-3 text-center">About Me</h2>
        <Row className="justify-content-center">
          <Column md="8" lg="7" className="">
            <p className="mt-3">
              I’ve spent a decade learning about and helping people, and in my
              pursuit to problem-solve for clients, organizations, and
              communities, I kept coming back to one thing: all the ways
              technology and access to it can improve lives. I felt like I
              needed to be a part of this growing group of creative
              problem-solvers using these flexible tools to build incredible
              solutions, so I decided to change course and pursue a career in
              web development.
            </p>
            <p>
              I’m open to remote or local (Northeast Tennessee/Southwest
              Virginia) freelance website design roles. While I’ve enjoyed
              developing websites/web apps in React the most, you can check out
              my portfolio to further explore the other technical skills I’ve
              developed.
            </p>
            <p>
              When I’m not working, you’ll find me outside, on a walk, listening
              to an audiobook. It’s the best way to de-stress! I also enjoy
              going out on the local lakes and rivers. If I’m inside, I’m
              probably still listening to an audiobook, but I’m cuddling my
              dogs, baking, or sewing. Sometimes, you can even find me on stage
              in a community theatre show.
            </p>
          </Column>
        </Row>
        <Row className="p-2 justify-content-center align-items-center text-center">
          <Column lg="3" xxl="2" className="p-2">
            <Button variant="outline-secondary" href="/work">
              Check Out My Work
            </Button>
          </Column>
          <Column lg="3" xxl="2" className="p-2">
            <Button
              variant="outline-secondary"
              href={require('../../assets/Etta_Haselden_Resume.pdf')}
              download
            >
              Download My Resume
            </Button>
          </Column>
          <Column lg="3" xxl="2" className="p-2">
            <Button variant="outline-secondary" href="/contact">
              Contact Me
            </Button>
          </Column>
        </Row>
      </Container>
    </Fade>
  );
}

export default About;
