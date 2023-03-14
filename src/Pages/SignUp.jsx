import React from "react";
import "./signUp.css"

const SignUp = () => {
  return (
    
    <div className="signUp-page d-flex">
    <form action="" class="signUp d-flex">
                <span class="mobile-menu-close"><i id="signIn-popup-close-btn" class=" ri signIn-close-icon ri-close-line"></i></span>
                <h2>Idea Innovation Cell</h2>
                {/* <div class="grid-col-two"> */}
                  <label for="user-name">Name</label>
                  <input type="text" id="user-name" placeholder="Name" autocomplete="off"/>
                  {/* <input type="text" placeholder="Last Name" autocomplete="off"/> */}
                {/* </div> */}
                <label for="user-email">Email</label>
                <input type="email" name="user-email" id="user-email" placeholder="enter your email address " autocomplete="off"/>
                <label for="user-email">Phone Number</label>
                <input type="number" name="user-phone-number" id="user-phone-number" placeholder="phone number" autocomplete="off"/>
                <label for="user-branch">Branch</label>
                <input type="text" name="user-branch" id="user-branch" placeholder="Branch" autocomplete="off"/>
                <div  class="grid-col-two">
                  <label for="domain-preference">Your Domain Preferences</label>
                  <select name="domain-preference" id="domain-preference" autocomplete="off">
                    <option value="option 1">Preference 1</option>
                    <option value="option 1">Cs-Electronics</option>
                    <option value="option 1">Mechanical</option>
                    <option value="option 1">Chemical</option>
                  </select>
                  <select name="domain-preference" id="domain-preference" autocomplete="off">
                    <option value="option 1">Preference2</option>
                    <option value="option 1">Cs-Electronics</option>
                    <option value="option 1">Mechanical</option>
                    <option value="option 1">Chemical</option>
                  </select>
                  <a href="https://www.mentimeter.com/signup?referral=features/quiz-presentations" class="quiz-btn">Continue to Quiz</a>
                </div>
              </form>
    </div>
  );
};

export default SignUp;
