import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";



export const SidebarData = [
    {
        id: 5,
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text",
    },
    {
        id: 6,
        title: "Services",
        path: "/services",
        icon: <IoIcons.IoIosPaper/>,
        cName: "nav-text",
    },
    {
        id: 7,
        title: "Products",
        path: "/products",
        icon: <FaIcons.FaCartPlus/>,
        cName: "nav-text",
    },
    {
        id: 8,
        title: "Sign_Up",
        path: "/sign-up",
        icon: <FaIcons.FaCartPlus/>,
        cName: "nav-text",
    },

]