import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-evenly py-5">
      <div className="dsn-family text-white text-3xl mr-9 ">
        <Link to="/dashbord" className="">
          DSN
        </Link>
      </div>
      <ul className="text-white flex gap-6 items-center justify">
        <li className="">
          <Link to="/dashbord" className="hover:text-green-400 opacity-50">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-green-400 opacity-50">
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="hover:text-green-400 opacity-50">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/service" className="hover:text-green-400 opacity-50">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-green-400 opacity-50">
            Contact
          </Link>
        </li>
      </ul>
      <button
        type="button"
        className="bg-emerald-400 rounded-full px-4 hover:bg-emerald-300"
      >
        <a href="/.pdf" download="dansan-dsn.pdf">
          Download CV
        </a>
      </button>
    </div>
  );
};

export default Navbar;
