import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import React from "react";


export const NavbarData = [
    {
        id: 1,
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text",
    },
    {
        id: 2,
        title: "Services",
        path: "/services",
        icon: <IoIcons.IoIosPaper/>,
        cName: "nav-text",
    },
    {
        id: 3,
        title: "Products",
        path: "/products",
        icon: <FaIcons.FaCartPlus/>,
        cName: "nav-text",
    },

    {
        id: 4,
        title: "SignUp",
        path: "/sign-up",
        icon: <GoIcons.GoPerson/>,
        cName: "nav-text",
    },
]