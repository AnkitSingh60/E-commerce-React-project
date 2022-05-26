import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Checkout = () => {
  const navigate = useNavigate();

  const orderPlaced = () => {
    navigate("/payment");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <form>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter address"
                    required=""
                  />
                </div>
              </div>
              <button
                className="w-100 btn btn-primary btn-lg mt70"
                type="submit"
                onClick={orderPlaced}
              >
                Place order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
