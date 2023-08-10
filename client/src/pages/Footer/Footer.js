import React from 'react'
import './Footer.css'
import Tada from 'react-reveal/Tada';
const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="footer">
            <Tada>
              <p className='text-center text-white p-2'>&copy; {new Date().getFullYear()}. All Right Reserved</p>
            </Tada>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
