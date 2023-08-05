import React,{useState} from 'react'
import Home from '../../pages/Home/Home'
import './Layout.css'

import {HiChevronDoubleLeft, HiChevronDoubleRight} from 'react-icons/hi';
import Menus from '../Menus/Menus';

const Layout = () => {
    const [toggle, setToggle] = useState(true);

    //change the toggle
    const handleToggle = ()=>{
        setToggle(!toggle);
    }
  return (
    <>
      <div className="sidebar_section">
        <div className={toggle? "sidebar-toggle  sidebar":"sidebar"}>
            <div className="sidebar_toggle_icon text-white">
                <p onClick={handleToggle}>
                    {
                        toggle?(<HiChevronDoubleLeft size={30}/>):(<HiChevronDoubleRight size={30}/>)
                    }
                </p>
            </div>
            <Menus toggle={toggle}/>
        </div>
        <div className="container">
            <Home/>
        </div>
      </div>
    </>
  )
}

export default Layout
