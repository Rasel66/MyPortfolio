import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import Resume from '../../assets/Docs/Cv.pdf'

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
              <a target='_blank' href='https://github.com/Rasel66' className='btn btn-hire'>Github</a>
              <a href={Resume} download="Curriculum_vitae.pdf" className='btn btn-cv'>My CV</a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home