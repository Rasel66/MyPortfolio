import React from 'react'
import './Footer.css'
import Tada from 'react-reveal/Tada';
import {AiFillLinkedin, AiFillFacebook,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container p-4">
          <div className="row">
            <Tada>
            <div className="col-md-5 col-lg-5 col-sm-12">
              <div className="footer-left text-white">
                <h5>Md. Rasel Hossain</h5>
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                <div className="fl-icon">
                  <a href="" className='text-white'><AiFillLinkedin size={35} className='icon'/></a>
                  <a href="" className='text-white'><AiFillFacebook size={35} className='icon'/></a>
                  <a href="" className='text-white'><AiFillGithub size={35} className='icon'/></a>
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
                <a href="">Resume</a>
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
