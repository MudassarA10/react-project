/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar flex justify-between h-20 p-5  ">
            <ul className="flex gap-20 text-lg">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            {/* <ul className="flex gap-20 text-lg  ">

                <li className="rounded-xl w-20 pl-2 pt-1 text-red-500"><Link to="/Home" >Home</Link></li>
                <li className="rounded-xl w-20 pl-2 pt-1 text-red-500"> <Link to="/About">About</Link></li>
                <li className="rounded-xl w-40 pl-2 pt-1 text-red-500"> <Link to="/Contact">Contact</Link></li>

            </ul> */}
        </div>
    );
}

export default Navbar;
