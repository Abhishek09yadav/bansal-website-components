"use client";

import React from "react";
import { User, Phone, Mail } from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";
const BoostRegistrationForm = () => {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div
        className="card shadow p-4 rounded-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h2 className="text-center mb-4 fw-bold">Boost Registration Form</h2>
        <form>
          {/* Name Field */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <User size={20} />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Your Name"
              />
            </div>
          </div>

          {/* Mobile Field */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <Phone size={20} />
              </span>
              <input
                type="tel"
                className="form-control border-start-0"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <Mail size={20} />
              </span>
              <input
                type="email"
                className="form-control border-start-0"
                placeholder="Your Email"
              />
            </div>
          </div>

          {/* Register Button */}
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary btn-lg rounded-3">
              Register
            </button>
          </div>

          {/* Footer Links */}
          <p className="text-center text-muted mb-0">
            Already Have an Account?{" "}
            <a href="/login" className="text-decoration-none fw-semibold">
              Login Here
            </a>{" "}
            |{" "}
            <a href="/" className="text-decoration-none fw-semibold">
              Back to Homepage
            </a>
          </p>
        </form>
      </div>
      <style>{`
      input:focus {
  box-shadow: none !important;
  border-color: #0d6efd;
}

.input-group-text {
  border-right: 0;
}

.form-control {
  border-left: 0;
}


      `}</style>
    </div>
  );
};

export default BoostRegistrationForm;
