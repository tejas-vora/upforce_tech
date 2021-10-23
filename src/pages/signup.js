import React, { useState } from "react";
import SignupForm from "../components/signupForm";

const Signup = () => {
  const [activePage, setActivePage] = useState("fanSignup");
  return (
    <>
      <div className="comtainer">
        <div>
          <button
            type="button"
            className={`signup_button ${
              activePage === "fanSignup" ? "active_button" : ""
            }`}
            onClick={() => setActivePage("fanSignup")}
          >
            FAN SIGNUP
          </button>
          <button
            type="button"
            className={`signup_button ${
              activePage === "talentSignup" ? "active_button" : ""
            }`}
            onClick={() => setActivePage("talentSignup")}
          >
            TALENT SIGNUP
          </button>
        </div>
        <div>
          <h3 className="title">Create Your Fan Account</h3>
        </div>
        <SignupForm activePage={activePage} />
      </div>
    </>
  );
};
export default Signup;
