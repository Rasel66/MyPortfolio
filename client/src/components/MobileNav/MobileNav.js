import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-scroll'
import { FcHome, FcAbout, FcBiotech, FcReading, FcDiploma2, FcVoicePresentation, FcContacts } from 'react-icons/fc'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineMenuFold } from 'react-icons/ai'
const MobileNav = () => {
    const [open, setOpen] = useState(false)

    //handle menu
    const handleOpen = () => {
        setOpen(!open)
    }

    //handle menu click
    const handleMenuClick = () => {
        setOpen(false)
    }
    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-header-nav">
                    {
                        open ? (<AiOutlineMenuFold size={30} className='nav-icons' onClick={handleOpen} />)
                            : (<GiHamburgerMenu size={30} className='nav-icons' onClick={handleOpen} />)
                    }

                    <span className='title-nav'>My Portfolio</span>
                </div>
                {
                    open && (<div className="mobile-nav-menu">
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link"><Link to='home' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcHome />Home</Link>
                                </div>
                                <div className="nav-link"><Link to='about' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcAbout />About</Link>
                                </div>
                                <div className="nav-link"><Link to='education' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcReading />Education</Link>
                                </div>
                                <div className="nav-link"><Link to='technology' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBiotech />Tech Stack</Link>
                                </div>
                                <div className="nav-link"><Link to='project' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcDiploma2 />Projects</Link>
                                </div>
                                <div className="nav-link"><Link to='contact' onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcContacts />Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </>
    )
}

export default MobileNav
