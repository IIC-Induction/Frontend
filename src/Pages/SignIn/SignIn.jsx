import React from 'react'
import "./signIn.css"
import astronaut from "../../Images/astronaut.avif";
import { Link } from "react-router-dom";


const SignIn = () => {

  return (
    <>
     <div className="signUp-page-container d-flex">
      <div className="signUp-page-wrapper signIn-page-wrapper">
        <div className="signUp-page-img">
          <img src={astronaut} alt="" />
        </div>
        <form className="signUp-form">
            <h2>Idea Innovation Cell</h2>
         
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your Email" autoComplete="off"  />
            {/* {<p className="error-message">{errors.email}</p>} */}
          </div>
          <div>
            <label htmlFor="phone">Phone-Number</label>
            <input type="number" name="phone" id="phone" placeholder="Phone Number" />
     
            {/* {<p className="error-message">{errors.phone}</p>} */}
          </div>
       
          <div className="bottom-container grid-two-col">
          <p>Not Registered ? <Link to="/" className="signIn-text">Sign Up</Link></p>
          <input className="sign-up-btn" type="submit" value="Sign In" />
          </div>
        </form>
      </div>
      </div> 
    </>
  )
}

export default SignIn
