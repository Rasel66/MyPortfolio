import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/Docs/resume.txt'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi 👋 I'm a</h2>
          <h1><Typewriter
            options={{
              strings: ['Web Developer !','Full Stack Developer !', 'MERN Stack Developer !', 'React Native Developer !'],
              autoStart: true,
              loop: true,
            }}
          /></h1>
          <div className="home-buttons mt-4">
            <button className='btn btn-hire'>Hire me</button>
            <a href={Resume} download="your_name.pdf" className='btn btn-cv'>My CV</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home