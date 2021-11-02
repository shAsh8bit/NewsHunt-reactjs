import React from "react";
import { Link } from "react-router-dom";

const Navbar =(props)=> {
  
    return (
      <>
     
      <nav className={`navbar navbar-inverse fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <a className="navbar-brand" href="/">
          <img
            src="./live.png"
            width="35"
            height="30"
            className="d-inline-block align-top mx-1"
            alt=""
          />
          NewsHunt
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item  mx-3">
              <Link className="nav-link" to="/">
               General <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item ">
            <div className="custom-control custom-switch mx-5 my-2">
              <input onClick={props.DarkMode} type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className={`custom-control-label text-${props.mode==="light"?"dark":"white"}`}  htmlFor="customSwitch1">{props.mode==="light"?"Enable Dark Mode":"Disable Dark Mode"}</label>
            </div>
            </li>
          </ul>
        </div>
      </nav>
      
    </>
    );
  
}
export default Navbar
