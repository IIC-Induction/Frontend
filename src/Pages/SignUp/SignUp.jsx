import React from "react";
import "./signUp.css";
import astronaut from "../../Images/astronaut.avif";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { useFormik } from 'react';
// import { signUpSchema } from "../schemas";

// const initialValues = {
//   name: "",
//   email: "",
//   phone: "",
//   branch: "",
//   preference_1: "",
//   preference_2: "",
// };

const SignUp = () => {
  // const { handleSubmit } = useFormik({
  //   validationSchema: signUpSchema,
  //   onSubmit: (values, action) => {
  //     console.log(values);
  //     action.resetForm()
  //   },
  // })


  const navigate = useNavigate();
  const [dom1, setDom1] = useState("");
  const [dom2, setDom2] = useState("");
  const [user, setUser] = useState({
    name: "", email: "", contact: "", branch: "", regdno: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
    console.log(user);
  }
  const option1 = (e) => {
    setDom1(e.target.value);
    console.log(dom1);
  }
  const option2 = (e) => {
    setDom2(e.target.value);
    console.log(dom2);
  }

  const Login = () => {
    const gettoken = window.localStorage.getItem("userToken");
    console.log(gettoken);
    if (gettoken)
      window.location.href = "./ProfilePage";
    else
      window.location.href = "./signInPage";
  }

  const postRegister = async (e) => {
    e.preventDefault();
    localStorage.clear();
    let userData = [];
    const { name, email, contact, branch, regdno } = user;
    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, contact, branch, regdno, pref1: dom1, pref2: dom2
      })
    })

    const data = await res.json();

    console.log(data.message);
    alert(`${data.message}`);
    if (data.status == 201) {
      console.log("fuck");
      navigate("/signInPage");
    }
    console.log(data);
    console.log(dom1);
    console.log(dom2);
    // console.log(password)
    // console.log(data);
    // if (data.status == "ok") {
    //   alert(`Login Successful`);
    //   window.localStorage.setItem("token", data.data);
    //   window.localStorage.setItem("email", email);
    //   window.localStorage.setItem("site", "freelancer");
    //   history.push("/createWorkspace");
    //   window.location.href = "./createWorkspace"
    // }
    // else if (data.status == "error")
    //   alert(data.message);
    // else alert("error logging in!");
  }
  return (
    <>
      <div className="signUp-page-container d-flex">
        <div className="signUp-page-wrapper">
          <div className="signUp-page-img">
            <img src={astronaut} alt="" />
          </div>
          <form className="signUp-form">
            <h2>Idea Innovation Cell</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="Name" value={user.name} onChange={handleInput} placeholder="Enter your Name" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={user.email} id="email" onChange={handleInput} placeholder="Enter your Email" autoComplete="off" />
            </div>
            <div className="phone-container grid-two-col">
              <label htmlFor="Phone Number">Phone-Number</label>
              <input type="number" name="contact" onChange={handleInput} value={user.contact} id="Phone-Number" placeholder="Phone Number" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="branch">Branch</label>
              <input type="text" name="branch" id="branch" onChange={handleInput} value={user.branch} placeholder="Enter your Branch" autoComplete="off" />
            </div>
            <div className="phone-container grid-two-col">
              <label htmlFor="Phone Number">Registration No:</label>
              <input type="number" name="regdno" onChange={handleInput} value={user.regdno} id="Phone-Number" placeholder="Phone Number" autoComplete="off" />
            </div>
            <div className="grid-two-col">
              <label htmlFor="preference-1">Your Domain Preference</label>
              <select name="preference-1" onChange={option1} id="preference-1">
                <option value="Preference 1" name="pref1">Preference 1</option>
                <option value="Cs-Electronics" name="pref1">Cs-Electronics</option>
                <option value="Chemical" name="pref1">Chemical</option>
                <option value="Mechanical" name="pref1">Mechanical</option>
                <option value="Management" name="pref1">Management</option>
              </select>

              <select name="preference-2" onChange={option2} id="preference-2">
                <option value="Preference 2" name="pref2">Preference 2</option>
                <option value="Cs-Electronics" name="pref2">Cs-Electronics</option>
                <option value="Chemical" name="pref2">Chemical</option>
                <option value="Mechanical" name="pref2">Mechanical</option>
                <option value="Management" name="pref2">Management</option>
              </select>
            </div>
            <div className="bottom-container grid-two-col">
              <p>Registered already ? <Link onClick={Login} className="signIn-text">Sign In</Link></p>
            </div>
            <input className="sign-up-btn" type="submit" value="Sign Up" onClick={postRegister} />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
