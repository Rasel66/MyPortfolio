import React from 'react'
import './About.css'
import Jump from 'react-reveal/Jump';

const About = () => {
    return (
        <>
            <Jump>
                <div className="about" id='about'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xl-4 col-xs-12">
                                <div className="about-image">
                                    <img src="https://i.ibb.co/MS4Mpj3/IMG-20210731-200635.jpg" alt="About image" />
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-8 col-xl-8 col-xs-12">
                                <div className="about-text">
                                    <h2 className='text-uppercase'>About me</h2>
                                    <p>"Hello, my name is <b><i>Md. Rasel Hossain</i></b>. I am a Web Developer with a passion for technology and problem-solving. I specialize in designing and developing software solutions to tackle complex challenges. With a strong foundation in computer science and engineering principles, I have acquired expertise in various programming languages, frameworks, and tools. Basically, I would like to develop various web applications with responsive design."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    )
}

export default About