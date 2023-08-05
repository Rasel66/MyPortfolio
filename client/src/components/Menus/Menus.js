import React from 'react'
import './Menus.css'
import {FcHome,FcAbout,FcPortraitMode,FcBiotech, FcReading, FcDiploma2, FcVoicePresentation, FcContacts} from 'react-icons/fc'
const Menus = ({ toggle }) => {
    return (
        <>
            {
                toggle? (
                <>
                    <div className="navbar_profile_pic">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile pic" />
                    </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link"><FcHome/>Home</div>
                            <div className="nav-link"><FcAbout/>About</div>
                            <div className="nav-link"><FcPortraitMode/>Work Experience</div>
                            <div className="nav-link"><FcBiotech/>Tech Stack</div>
                            <div className="nav-link"><FcReading/>Education</div>
                            <div className="nav-link"><FcDiploma2/>Projects</div>
                            <div className="nav-link"><FcVoicePresentation/>Testimonial</div>
                            <div className="nav-link"><FcContacts/>Contact</div>
                        </div>                        
                    </div>
                </>
                ):(
                <div className="nav-itemss">
                    <div className="nav-item">
                        <div className="nav-link"><FcHome title='Home'/></div>
                        <div className="nav-link"><FcAbout title='About'/></div>
                        <div className="nav-link"><FcPortraitMode title='Experience'/></div>
                        <div className="nav-link"><FcBiotech title='Technology'/></div>
                        <div className="nav-link"><FcReading title='Education'/></div>
                        <div className="nav-link"><FcDiploma2 title='Projects'/></div>
                        <div className="nav-link"><FcVoicePresentation title='Testimonial'/></div>
                        <div className="nav-link"><FcContacts title='Contact'/></div>
                    </div>                        
                </div>
                )
            }

        </>
    )
}

export default Menus