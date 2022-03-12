import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-NavLink active" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink" exact to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink" exact to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
    <NavLink className="btn btn-outline-light" to='/users/add'>Add User </NavLink>
  </div>
</nav>
    );
}
export default Navbar;