import React,{useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './css/forgetpassword.css';
import logo from './img/logo.png';

import CustomToast from "../toast_component/CustomToast";


export default function ForgetPassword() {


    const onClickUpdatePassword = (event) => {
        event.preventDefault();
  // Simulate form submission logic
  const updatePasswordSuccess = true; // This would be determined by your actual operation

  // Show toast based on success or failure
  if (updatePasswordSuccess) {
    CustomToast({
      message: 'Your password has been updated successfully!',
      type: 'success'
    });
  } else {
    CustomToast({
      message: 'An error occurred while updating your password. Please try again.',
      type: 'error'
    });
  }
        
    };

    return (
        <div className="container-fluid"> 
            <div className="row">
                <div className="col-lg-6 col-md-6 d-none d-md-block infinity-image-container-forgot-pass"></div>
                <div className="col-lg-6 col-md-6 infinity-form-container">
                    <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
                        <div className="text-center mb-3 mt-5">
                            <img src={logo} width="150px"/>
                        </div>
                        <div className="text-center mb-4">
                            <h4>Update Password</h4>
                        </div>   
                        <form className="px-3">
                            <div className="form-input">
                                <span><i className="bi bi-envelope-fill"></i></span>
                                <input type="email" name="" placeholder="Email Address" tabIndex="10" required/>
                            </div>
                            <div className="form-input">
                                <span><i className="bi bi-lock-fill"></i></span>
                                <input type="password" name="" placeholder="Old Password" tabIndex="10" required/>
                            </div>
                            <div className="form-input">
                                <span><i className="bi bi-lock-fill"></i></span>
                                <input type="password" name="" placeholder="Confirm Password" required/>
                            </div>
                            <div className="mb-3"> 
                                <button type="submit" onClick={onClickUpdatePassword} className="btn btn-warning">Update Password</button>
                               
                                <ToastContainer />
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
