import React from "react";
import "./Navbar.css";
import logo from "../../logo/unnamed-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isMD, setIsMD] = useState(false);
  const responsive = () => {
    setIsMD(!isMD);
  };

  return (
    <div className="mb-24">
      <div
        className={`relative navbar bg-base-300 justify-between md:justify-around ${
          isMD ? "block md:flex" : "flex"
        }`}
      >
        <div className={` ${isMD ? "block md:inline-flex" : undefined}`}>
          <Link to="/" className=" normal-case text-xl">
            <img className="h-24 w-24 inline-block" src={logo} alt="" />
            <span className="text-4xl">Test<span className="font-bold">Gorilla</span></span>
          </Link>
        </div>
        <div
          className={`display  md:flex md:flex-row  justify-evenly duration-1000 ease-in ${
            isMD ? " flex flex-col  md:flex md:flex-row " : "hidden"
          }`}
        >
          <NavLink
            to="topics"
            className={({ isActive }) =>
              isActive ? "text-cyan-500" : undefined
            }
          >
            <span className="text-xl">Topics</span>
          </NavLink>
          <NavLink
            to="statistics"
            className={({ isActive }) =>
              isActive ? "text-cyan-500" : undefined
            }
          >
            <span className="text-xl relative">Statistics</span>
          </NavLink>
          <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive ? "text-cyan-500" : undefined
            }
          >
            <span className="text-xl">Blog</span>
          </NavLink>
        </div>
        <div className="absolute top-4 right-5 text-3xl md:hidden">
          <button onClick={responsive}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
