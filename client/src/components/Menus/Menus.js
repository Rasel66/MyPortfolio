import React from 'react'
import './Menus.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link} from 'react-scroll'
import {GiSkills} from 'react-icons/gi'
import {FcHome,FcAbout,FcBiotech, FcReading, FcDiploma2, FcVoicePresentation, FcContacts} from 'react-icons/fc'
const Menus = ({ toggle }) => {
    return (
        <>
            {
                toggle? (
                <>
                    <Zoom>
                        <div className="navbar_profile_pic">
                            <img src="https://i.ibb.co/Z8KWXk1/IMG-20220126-WA0081.jpg" alt="Profile pic" />
                        </div>
                    </Zoom>
                    <Fade left>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link"><Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcHome/>Home</Link>
                                </div>
                                <div className="nav-link"><Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcAbout/>About</Link>
                                </div>
                                <div className="nav-link"><Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcReading/>Education</Link>
                                </div>
                                <div className="nav-link"><Link to='technology' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBiotech/>Tech Stack</Link>
                                </div>
                                <div className="nav-link"><Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcDiploma2/>Projects</Link>
                                </div>
                                <div className="nav-link"><Link to='skills' spy={true} smooth={true} offset={-100} duration={100}>
                                    <GiSkills/>Skills</Link>
                                </div>
                                <div className="nav-link"><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcContacts/>Contact</Link>
                                </div>
                            </div>                        
                        </div>
                    </Fade>
                </>
                ):(
                <Fade left>
                    <div className="nav-itemss">
                    <div className="nav-item">
                    <div className="nav-link"><Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                                <FcHome/></Link>
                            </div>
                            <div className="nav-link"><Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                                <FcAbout/></Link>
                            </div>
                            <div className="nav-link"><Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                                <FcReading/></Link>
                            </div>
                            <div className="nav-link"><Link to='technology' spy={true} smooth={true} offset={-100} duration={100}>
                                <FcBiotech/></Link>
                            </div>
                            <div className="nav-link"><Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                                <FcDiploma2/></Link>
                            </div>
                            <div className="nav-link"><Link to='skills' spy={true} smooth={true} offset={-100} duration={100}>
                                <GiSkills/></Link>
                            </div>
                            <div className="nav-link"><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                                <FcContacts/></Link>
                            </div>
                    </div>                        
                </div>
                </Fade>
                )
            }

        </>
    )
}

export default Menus