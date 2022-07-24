import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-bootstrap/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function CaseStudy() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(true);
  });

  return (
    <Fade in={open}>
      <Container className='case-study'>
        <h2 className='pt-3 text-center'>Case Study: Etta's Movie Database</h2>
        {/* landing screenshot */}
        <Image fluid src={require('../../assets/Screenshot_EMDB Login_Case Study.png')} className='mb-3 mt-3 border' />
        {/* Intro (Overview, Purpose & Context, Team) */}
        <Row className='pb-3'>
          <h4>Overview</h4>
          <p>EMDB (Etta’s Movie Database) is a web application that allows you to create an account, update user information, view information on a list of movies, and add or remove movies from that list to your favorites list.</p>
          <h4>Purpose & Context</h4>
          <p>This project was completed as an assignment for the Full-Stack Web Development course with Career Foundry, so the primary purpose was personal education on full-stack web app development. This was my first assignment that combined frontend and backend development using the MERN stack.</p>
          <h4>Team</h4>
          <p>EMDB was a solo project—I was the only one working on it. However, I used the guidance of the Career Foundry exercises, my tutor, my mentor, and a couple of developer friends for instruction and support throughout the process.</p>
        </Row>

        {/* Development Section */}
        <Row className='pt-4 pb-4 border-top border-bottom'>
          <Column lg='4'>
            <h4>Server-Side Development</h4>
            <p>On the server side, I used Node.js and Express.js to create a REST API so that the client side of EMDB can interact with the MongoDB database through HTTP requests (CRUD functions). Additional features include Mongoose for data modeling, Passport for JWT authentication, and CORS and password hashing for security measures.</p>
            <p>I used Postman to test the API & Heroku to host it.</p>
          </Column>
          <Column lg='8'>
            <Image fluid src={require('../../assets/Postman_Screenshot_Case Study.png')} />
          </Column>
        </Row>
        <Row className='pt-4 pb-4 border-bottom'>
          <Column lg='8'>
            <Image fluid src={require('../../assets/Screenshot_EMDB Movies_Case Study.png')} />
          </Column>
          <Column lg='4'>
            <h4>Client-Side Development</h4>
            <p>The client-side part of the app was developed as a single-page application with React. I used both class and functional components, lifecycle hooks, and routing throughout the app. I implemented Redux to centralize and more easily track the more advanced states (movies and user log in). For styling, I used React Bootstrap to get clean styling options that Bootstrap offers, using my custom colors as well.</p>
            <p>The client-side was built with Parcel and is hosted on Netlify.</p>
          </Column>
        </Row>

        {/* Conclusion (Challenges, Areas for Improvement) */}
        <Row className='pt-4'>
          <h4>Challenges</h4>
          <p>Since almost all of the tools we used in this app were new to me, much of this app was challenging! While there wasn’t anything specifically more difficult than anything else, the main challenge I overcame during this project was my comfort level with the debugging process. Implementation is so specific to the user’s environment that even when following clear directions, issues can still arise. I became best friends with Google & Stack Overflow and learned the value of talking through problems the internet can’t solve with real people—my tutor, my mentor, and my developer friends.</p>
          <h4>Areas for Improvement</h4>
          <p>Considering this app does exactly what it’s supposed to, I consider it a success. However, I recognize that it isn’t perfect. For instance, I have both server-side and client-side validation, but my server-side validation only logs to the console instead of informing the user. This would be a major flaw in the user experience of a publicly used app. Instead of spending my time going beyond Career Foundry’s expectation for the project, I have noted these areas for improvement and will make sure in future, public-facing projects, that I present the highest-quality product to users. </p>
          <p>I’m proud of this project, enjoyed developing it, and learned many new skills along the way.</p>
        </Row>

        {/* Buttons */}
        <Row className='justify-content-center pt-2 pb-4'>
          <Column sm='4' md='3' className='text-center'>
            <Button variant='outline-secondary' href='https://ettasmoviedatabase.netlify.app/' target='_blank' className='m-2'>Check out EMDB</Button>
          </Column>
          <Column sm='4' md='3' className='text-center'>
            <Button variant='outline-secondary' href='https://github.com/ettariley/EMDB' target='_blank' className='m-2'>Server-Side Code</Button>
          </Column>
          <Column sm='4' md='3' className='text-center'>
            <Button variant='outline-secondary' href='https://github.com/ettariley/EMDB-client' target='_blank' className='m-2'>Client-Side Code</Button>
          </Column>
        </Row>
        <Row className='pb-4 justify-content-center'>
          <Column md='4' className='text-center'>
            <Link className="btn btn-secondary" to="/work">Back to All Projects</Link>
            {/* <Button variant='secondary' href='/work'>Back to All Projects</Button> */}
          </Column>
        </Row>
      </Container>
    </Fade>
  )
}

export default CaseStudy;