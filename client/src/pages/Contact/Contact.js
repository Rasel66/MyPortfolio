import React from 'react'
import './Contact.css'
import Rotate from 'react-reveal/Rotate';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai'
const Contact = () => {
    return (
        <>
            <div className="container contact mb-5" id='contact'>
                <h2 className='col-12 mb-3 mt-5 text-center text-uppercase'>Contact Me</h2>
                <hr />
                <div className="card card-0 border-0 py-5 px-2">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img src="https://www.momonwatch.com/wp-content/uploads/2020/06/5-1020x600.png" alt="contact image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 cl-lg-6">
                            <Rotate top right>
                                <div className="row">
                                    <div className="card2 d-flex border-0 px-4 py-3">
                                        <h5>Contact with:
                                            <AiFillLinkedin color='blue' size={35} className='ms-2' />
                                            <AiFillGithub color='black' size={35} className='ms-2' />
                                            <AiFillFacebook color='blue' size={35} className='ms-2' />
                                        </h5>
                                    </div>
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line" />
                                    <small className='or text-center'>OR</small>
                                    <div className="line" />
                                </div>
                                <div className="row px-3">
                                    <input type="text" name='name' placeholder='Enter your name' className='form-control mb-3' />
                                </div>
                                <div className="row px-3">
                                    <input type="email" name='email' placeholder='Enter your email' className='form-control mb-3' />
                                </div>
                                <div className="row px-3">
                                    <textarea type="text" name='msg' placeholder='Write somethings' className='form-control mb-3'></textarea>
                                </div>
                                <div className="row px-3">
                                    <button className='c-btn btn btn-primary' type='submit '>SEND</button>
                                </div>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact