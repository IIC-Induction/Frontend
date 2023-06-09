import React, { useEffect } from 'react'
import { useState } from 'react'
import "./profilePage.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  let userdetails = {};
  const [studentData, setStudentData] = useState({});
  const [Status, setStatus] = useState("")
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    window.location.href = "./signInPage";
  }

  const callProfilePage = async () => {
    try {
      const token = window.localStorage.getItem("userToken");
      const res = await fetch("https://iicfinalinduction.onrender.com/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token
        })
      })
      const ver = await res.json();

      if (ver.status === "error") {
        localStorage.clear();
        alert("You are logged out");
        window.location.href = "./signInPage";
      }
      else {
        console.log("user verified");
      }

      userdetails = await JSON.parse(window.localStorage.getItem("induction2023data"));
      window.localStorage.setItem("status", userdetails.result);
      const key = window.localStorage.getItem("status");
      // console.log("studentdata", userdetails.regdno);
      // console.log("userdataprofile", userdetails.name);
      setStudentData(userdetails);
      console.log("studentdata regdno", studentData.regdno);
      console.log("studentdata regdno", studentData.name);
      console.log("studentdata status", studentData.result);


      if (key == -1) {
        setStatus("Rejected")
      }
      else if (key == 1) {
        setStatus("Accepted")
      }
      else {
        console.log("jefwef");
        setStatus("Coming Soon ...")
      }
    }
    catch (err) {
      console.log(err);
      navigate('/signInPage');
    }

  }




  useEffect(() => {
    callProfilePage();
  }, [])



  return (
    <>
      <div className="user-profile-page">
        <div className="header-container">
          <div className="header-wrapper d-flex">
            {/* <div onClick={Logout} className='logout'>Logout</div> */}
            <input className="sign-up-btn" onClick={Logout} type="submit" value="Logout"/>
            <div> <h2>IDEA INNOVATION CELL</h2></div>
            <div><p>Hello,{studentData.name} </p></div>
          </div>
        </div >
        {/* //////////// */}
        <div className="user-profile">
          <h3>Your Details</h3>
          <div className="flex-col-2">
            <p>Name:</p>
            <p className='user-name'>{studentData.name}</p>
          </div>
          <div className="flex-col-2">
            <p>Email:</p>
            <p className='user-email'>{studentData.email}</p>
          </div>
          <div className="flex-col-2">
            <p>Phone:</p>
            <p className='user-phone'>{studentData.contact}</p>
          </div>
          <div className="flex-col-2">
            <p>Branch:</p>
            <p className='user-branch'>{studentData.branch}</p>
          </div>
          <div className="flex-col-2">
            <p>Registration No:</p>
            <p className='user-branch'>{studentData.regdno}</p>
          </div>
          <h4>Domain Preferences</h4>
          <div className="flex-col-2">
            <p>Preference 1:</p>
            <p className='user-preference-1'>{studentData.pref1}</p>
          </div>
          <div className="flex-col-2">
            <p>Preference 2:</p>
            <p className='user-preference-2'>{studentData.pref2}</p>
          </div>
        </div>
        <div className="user-result">
          <h3>Induction Tests</h3>
          <div className="grid-col-3">
            <p>Level 1 :</p>
            <p >Date : 17 March ,2023</p>
            <p ><a className='test-link' href="www.google.com">Take Test 1</a></p>
            <p className='result'>Result : {Status} </p>
          </div>
          <div className="grid-col-3">
            <p>Level 2 :</p>
            <p >Date : 22 March ,2023</p>
            <p >PI Round 1</p>
            <p className='result'>Result : Coming Soon ...  </p>
          </div>
          <div className="grid-col-3">
            <p>Level 3 :</p>
            <p >Date : 30 March ,2023</p>
            <p >PI Round 2</p>
            <p className='result'>Result : Coming soon...</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default ProfilePage
