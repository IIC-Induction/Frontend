import React from "react";
import "./signUp.css";
import astronaut from "../../Images/astronaut.avif";
import { Link } from "react-router-dom";
import { useFormik } from "formik"
import { signUpSchema } from "../../schemas";

const initialValues ={
    name:"",
    email:"",
    phone:"",
    branch:"",
    preference_1:"",
    preference_2:"",
};

const SignUp = () => {

    const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action)=>{console.log(values);
        action.resetForm()},
    })
console.log(errors);
  return (
    <>
    
      <div className="signUp-page-container d-flex">
      <div className="signUp-page-wrapper">
        <div className="signUp-page-img">
          <img src={astronaut} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="signUp-form">
            <h2>Idea Innovation Cell</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="Name" placeholder="Enter your Name" autoComplete="off" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
            {<p className="error-message">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your Email" autoComplete="off" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {<p className="error-message">{errors.email}</p>}
          </div>
          <div className="phone-container grid-two-col">
           <div> <label htmlFor="phone">Phone-Number</label>
            <input type="number" name="phone" id="phone" placeholder="Phone Number" value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
            <button className="send-otp-btn">Send OTP</button>
            </div>
          <div>
            <label htmlFor="otp">Verify OTP</label>
            <input type="number" name="otp" id="otp" placeholder="Enter OTP" autoComplete="off" />
          </div>
            {<p className="error-message">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="branch">Branch</label>
            <input type="text" name="branch" id="branch" placeholder="Enter your Branch" autoComplete="off" value={values.branch} onChange={handleChange} onBlur={handleBlur}/>
            {<p className="error-message">{errors.branch}</p>}
          </div>
          <div className="grid-two-col">
            <label htmlFor="preference-1">Your Domain Preference</label>
            <select name="preference-1" id="preference-1" value={values.preference_1} onChange={handleChange} onBlur={handleBlur}>
              <option value="Preference 1">Preference 1</option>
              <option value="Cs-Electronics">Cs-Electronics</option>
              <option value="Chemical">Chemical</option>
              <option value="Mechnacial">Mechanical</option>
              <option value="Management">Management</option>
            </select>
            

            <select name="preference-2" id="preference-2" value={values.preference_2} onChange={handleChange} onBlur={handleBlur}>
              <option value="Preference 2">Preference 2</option>
              <option value="Cs-Electronics">Cs-Electronics</option>
              <option value="Chemical">Chemical</option>
              <option value="Mechnacial">Mechanical</option>
              <option value="Management">Management</option>
            </select>
          </div>
          <div className="bottom-container grid-two-col">
          <p>Registered already ? <Link to="/signInPage" className="signIn-text">Sign In</Link></p>
          <input className="sign-up-btn" type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default SignUp;
