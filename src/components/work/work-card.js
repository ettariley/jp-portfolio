import React from 'react';
import Column from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './work.css';

function WorkCard(props) {
  const { work } = props;
  const tech = work.technologies;
  const techList = tech.toString();

  return (
      <Card className='work-card'>
        <Card.Img variant='top' src={work.screenshot} />
        <Card.Body>
          <Card.Title>{work.title}</Card.Title>
          <Card.Subtitle>{work.tagline}</Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Card.Text className='m-0'>Technologies:</Card.Text>
          <Card.Text>{techList}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text>{work.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          {work.github ? (
            <Button variant="primary" className='m-2' href={work.github} target="_blank">Code</Button>
          ) : null}
          {work.demo ? (
            <Button variant="primary" className='m-2' href={work.demo} target="_blank">Demo</Button>
          ) : null}
          {work.liveSite ? (
            <Button variant="primary" className='m-2' href={work.liveSite} target="_blank">Website</Button>
          ) : null}
          {work.caseStudy ? (
            <Button variant="primary" className='m-2' href='/case-study'>Case Study</Button>
          ) : null}
        </Card.Body>
      </Card>    
  );
}

export default WorkCard;