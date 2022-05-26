import React from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import "./Home.css";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const state = useSelector((state) => state.mycart);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  const Clear = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/products">
          Products
        </Link>
        <Link className="navbar-brand" to="/manageproducts">
          Manage Products
        </Link>
        {auth ? (
          <Link onClick={logout} className="navbar-brand" to="/">
            Logout (
            {<span className=""> {JSON.parse(auth).name.toUpperCase()}</span>}){" "}
          </Link>
        ) : (
          <div className="buttonContainer">
            <Button onClick={Clear} variant="outline-primary" size="">
              Clear
            </Button>
            <Link to="/login">
              <Button size="">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline-primary" size="">
                Signup
              </Button>
            </Link>
          </div>
        )}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        </div>
        <div>
          <Link to="/cart" className="btn btn-outline-dark">
            <i className="fa fa-shopping-cart me-1"></i>
            cart({state.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
