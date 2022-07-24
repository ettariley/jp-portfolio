import React, { useEffect, useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import { workInfo } from './work-info';
import WorkCard from './work-card';
import './work.css';

function Work() {
  const [open, setOpen] = useState(false);
  let work = workInfo;

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  });

  return (
    <Fade in={open}>
      <Container className='work'>
        <h2 className='pt-3 text-center'>My Work</h2>
        <Row className='pb-3 justify-content-center'>
          {work.map(w => (
            <Column md='6' lg='4' className='p-1'>
              <WorkCard work={w} />
            </Column>
          ))}
        </Row>
      </Container>
    </Fade>
  );
}

export default Work;