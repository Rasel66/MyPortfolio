import React from 'react'
import './Footer.css'
import Tada from 'react-reveal/Tada';
import Resume from '../../assets/Docs/Cv.pdf'
import {AiFillLinkedin, AiFillFacebook,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark footer">
        <div className="container p-4">
          <div className="row">
            <Tada>
            <div className="col-md-5 col-lg-5 col-sm-12">
              <div className="footer-left text-white">
                <h5>Md. Rasel Hossain</h5>
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                <div className="fl-icon">
                  <a target='_blank' href="https://www.linkedin.com/in/md-rasel-hossain-1867841a4/" className='text-white'><AiFillLinkedin size={35} className='icon'/></a>
                  <a target='_blank' href="https://www.facebook.com/profile.php?id=100014848712591&mibextid=ZbWKwL" className='text-white'><AiFillFacebook size={35} className='icon'/></a>
                  <a target='_blank' href="https://github.com/Rasel66" className='text-white'><AiFillGithub size={35} className='icon'/></a>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-sm-12">
              <div className="footer-middle text-white">
                <h5>Get In Touch</h5>
                <p>Hi!! I am Md. Rasel Hossain. I am a full stack Web Developer. If you need to develop any web technologies you can contact me. <i>THANKS</i></p>
                <p>Gmail: raselhossain5437@gmail.com</p>
                <p>Phone: +880 1721359977</p>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12">
              <div className="footer-right text-white">
                <h5>About</h5>
                <a href={Resume} download="Curriculum_vitae.pdf">Resume</a>
              </div>
            </div>
            </Tada>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
