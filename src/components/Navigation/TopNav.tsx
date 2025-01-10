import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="bg-black w-full text text-white">
        <ul className="flex justify-center">
            <li className="text-sm p-2.5">
                <NavLink className={(navData) => navData.isActive ? "text-p-red" : "" }to="/">Home</NavLink>
            </li>
            <li className="text-sm p-2.5">
                <NavLink className={(navData) => navData.isActive ? "text-p-red" : "" } to="/search">NASA Image Search</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default TopNav;
