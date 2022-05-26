import React from 'react'
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate()
    const orderPlaced = () => {
        alert("Your order has been placed")
        navigate("/");
      };
  return (
    <>
    
    <div className="paymentt">
        <div className="Paycard px-4">
            <p className="PayHeading">Payment Details</p>
            <div className="row gx-3">
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Person Name</p>
                        <input className="form-control mb-3" type="text" placeholder="Full Name"  />
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Card Number</p>
                        <input className="form-control mb-3" type="text" placeholder="1234    5678    435678" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Expiry</p>
                        <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">CVV/CVC</p>
                        <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                    </div>
                </div>
                <div onClick={orderPlaced} className="col-12">
                    <div className="payButton">
                        <span className="ps-3">Pay</span>
                        <span className="fas fa-arrow-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Payment