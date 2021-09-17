import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"

import {SidebarData} from "./SidebarData";
import {NavbarData} from "./NavbarData";

import './Navbar.css';

const Navbar = () => {


    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    const closeMobileMenu = () => setSidebar(false);
    return (
        <>
            <div className="navbar">
                <div className="navbar-desktop-states">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <MdIcons.MdFingerprint className='navbar-default-icon' />
                        <h2 className="navbar-logo-h2">Logo</h2>
                    </Link>


                    <ul className="nav-default-item">
                        {NavbarData.map(({id, cName, path, icon, title}) => {
                            return (
                                <li key={id} className={cName}>
                                    <Link to={path} onClick={closeMobileMenu}>
                                        {icon}
                                        <span>{title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="navbar-mobile-states">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>


                    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>

                        <ul className="nav-menu-items">
                            <li className="navbar-toggle">
                                <Link to="#" className="menu-bars">
                                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                                </Link>
                            </li>
                            {SidebarData.map(({id, cName, path, icon, title}) => {
                                return (
                                    <li key={id} className={cName}>
                                        <Link to={path} onClick={closeMobileMenu}>
                                            {icon}
                                            <span>{title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;
