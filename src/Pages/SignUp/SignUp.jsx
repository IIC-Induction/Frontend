import React from "react";
import "./signUp.css";
import astronaut from "../../Images/astronaut.avif";
const SignUp = () => {
  return (
    <>
      <div className="signUp-page-container d-flex">
      <div className="signUp-page-wrapper">
        <div className="signUp-page-img">
          <img src={astronaut} alt="" />
        </div>
        <form action="" className="signUp-form">
            <h2>Idea Innovation Cell</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="Name" placeholder="Enter your Name" autoComplete="off" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your Email" autoComplete="off" />
          </div>
          <div className="phone-container grid-two-col">
            <label htmlFor="Phone Number">Phone-Number</label>
            <input type="number" name="Phone-Number" id="Phone-Number" placeholder="Phone Number" autoComplete="off"/>
            <button className="send-otp-btn">Send OTP</button>
          </div>
          <div>
            <label htmlFor="otp">Verify OTP</label>
            <input type="text" name="otp" id="otp" placeholder="Enter OTP" autoComplete="off" />
          </div>
          <div>
            <label htmlFor="branch">Branch</label>
            <input type="text" name="branch" id="branch" placeholder="Enter your Branch" autoComplete="off" />
          </div>
          <div className="grid-two-col">
            <label htmlFor="preference-1">Your Domain Preference</label>
            <select name="preference-1" id="preference-1">
              <option value="Preference 1">Preference 1</option>
              <option value="Cs-Electronics">Cs-Electronics</option>
              <option value="Chemical">Chemical</option>
              <option value="Mechnacial">Mechanical</option>
              <option value="Management">Management</option>
            </select>

            <select name="preference-2" id="preference-2">
              <option value="Preference 2">Preference 2</option>
              <option value="Cs-Electronics">Cs-Electronics</option>
              <option value="Chemical">Chemical</option>
              <option value="Mechnacial">Mechanical</option>
              <option value="Management">Management</option>
            </select>
          </div>
          <input className="sign-up-btn" type="submit" value="Sign Up" />
        </form>
      </div>
      </div>
    </>
  );
};

export default SignUp;
