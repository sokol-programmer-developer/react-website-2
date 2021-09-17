import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

import {SidebarData} from "./SidebarData";

import './Navbar.css';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    const closeMobileMenu = () => setSidebar(false);
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
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
        </>
    );
}

export default Navbar;
