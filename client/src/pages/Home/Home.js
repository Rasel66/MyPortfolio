import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import Resume from '../../assets/Docs/resume.txt'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="container home-content">
          <Fade top>
            <h2>Hi 👋 I'm a</h2>
            <h1><Typewriter
              options={{
                strings: ['Web Developer !', 'Full Stack Developer !', 'MERN Stack Developer !', 'React Developer !'],
                autoStart: true,
                loop: true,
              }}
            /></h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons mt-4">
              <a href='' className='btn btn-hire'>Hire me</a>
              <a href={Resume} download="your_name.pdf" className='btn btn-cv'>My CV</a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home