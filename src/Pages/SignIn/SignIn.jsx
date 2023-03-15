import React from 'react'
import "./signIn.css"
import astronaut from "../../Images/astronaut.avif";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
  const navigate = useNavigate();
  const [dom1, setDom1] = useState("");
  const [dom2, setDom2] = useState("");
  const [user, setUser] = useState({
    email: "", contact: ""
  });


  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
    console.log(user);
  }
  const postLogin = async (e) => {
    e.preventDefault();
    let userData;
    const { email, contact } = user;
    const res = await fetch("https://induction2023-2fqt.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, contact
      })
    })
    const data = await res.json();
    console.log(data);
    userData = data;
    window.localStorage.setItem("induction2023data", JSON.stringify(userData));
    console.log(data.message);
    alert(`${data.message}`);
    if (data.status == 201) {
      console.log("yes");
      navigate('/ProfilePage');
    }

  }
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
              <input type="email" name="email" id="email" value={user.email} placeholder="Enter your Email" autoComplete="off" onChange={handleInput} />
              {/* {<p className="error-message">{errors.email}</p>} */}
            </div>
            <div>
              <label htmlFor="phone">Phone-Number</label>
              <input type="number" name="contact" value={user.contact} id="phone" placeholder="Phone Number" onChange={handleInput} />

              {/* {<p className="error-message">{errors.phone}</p>} */}
            </div>

            <div className="bottom-container grid-two-col">
              <p>Not Registered ? <Link to="/" className="signIn-text">Sign Up</Link></p>
              <input className="sign-up-btn" type="submit" value="Sign In" onClick={postLogin} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn