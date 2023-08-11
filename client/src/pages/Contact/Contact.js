import React,{useState} from 'react'
import './Contact.css'
import Rotate from 'react-reveal/Rotate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai'
const Contact = () => {
    const [inputValue, setInputValue] = useState({
        fullName: '',
        email: '',
        msg: ''
    });
    
    const sentUserEmail = async(e) =>{
        e.preventDefault();

        const {fullName, email, msg} = inputValue;

        if(fullName == ''){
            toast.error("Full name is required");
        }else if(email == ''){
            toast.error("Email name is required");
        }else if(!email.includes("@")){
            toast.error("Invalid email address");
        }else{
            const res = await fetch("http://localhost:6002/sendEmail",{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    fullName, email, msg
                })
            });
            const data = await res.json();
            console.log(data)

            if(data.status == 201){
                toast.success("Email sent successfully")
                setInputValue({
                    ...inputValue,
                    fullName: '',
                    email: '',
                    msg: ''
                })
            }
        } 
    }

    const getValue = (e)=>{
        const {name, value} = e.target;
        setInputValue(()=>{
            return {
                ...inputValue,
                [name]: value
            }
        })
    }
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
                        <ToastContainer/>
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
                                
                                <form action="" method='post'>
                                    <div className="row px-3">
                                        <input type="text" name='fullName' value={inputValue.fullName} onChange={getValue} placeholder='Enter your name' className='form-control mb-3' />
                                    </div>
                                    <div className="row px-3">
                                        <input type="email" name='email' value={inputValue.email} onChange={getValue} placeholder='Enter your email' className='form-control mb-3' />
                                    </div>
                                    <div className="row px-3">
                                        <textarea type="text" name='msg' value={inputValue.msg} onChange={getValue} placeholder='Write somethings' className='form-control mb-3'></textarea>
                                    </div>
                                    <div className="row px-3">
                                        <button className='c-btn btn btn-primary' onClick={sentUserEmail} type='submit '>SEND</button>
                                    </div>
                                </form>
                                
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact