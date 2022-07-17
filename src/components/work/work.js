import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import { workInfo } from './work-info';
import WorkCard from './work-card';
import './work.css';

function Work() {
  let work = workInfo;

  return (
    <Container className='work'>
      <h2 className='pt-3'>Work</h2>
      <p>See screenshots, descriptions, and links to my projects below. Please note, due to an authentication issue with Google OAuth for the Meet app, my GitHub Pages demo sites give you a Google Security warning when visiting. There is nothing dangerous on my demo sites, and I am trying to see if I can fix this issue. You can view the links in Firefox or Edge without any warnings.</p>
      <Row className='pb-2 justify-content-center'>
        {work.map(w => (
          <Column md='6' lg='4' className='p-1'>
            <WorkCard work={w} />
          </Column>
        ))}
      </Row>
    </Container>
  );
}

export default Work;