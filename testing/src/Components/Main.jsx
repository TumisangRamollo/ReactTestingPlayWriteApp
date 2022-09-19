import React, { useState } from "react";
import "./App.css";
import Contents from "./";
import HomeNavagation from'./HomeNavigation'
import Spinner from './Spinner'
import axios from 'axios'

function Main() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validation, setValidation] = useState();
  const [show, setShow] = useState(false);
  const [values, setValues] = useState([]);
  const [switchSignupbtn , setswitchSignupbtn] = useState(false)

  // const handleChange = (e) => {
  //   setUser({ user, [e.target.name]: e.target.value });
  // };

  // console.log('user1', user)

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {email , password }
    const user = await axios.post("http://localhost:4002/login", data)

// let foundUserDate = user.data.date
// let foundUserEmail = user.data.foundUser.email
// let founduserValidationMEssage = user.data.message
console.log('user', user)
    try {
      if (email === user.data.foundUser.email &&  email !== "") {
        setValues([values, user.data.foundUser.email, user.data.date]);
        setswitchSignupbtn(true)
        setValidation(user.data.message);
        setTimeout(function() {
          setShow(true);
        }, 3000);
        setEmail("")
        setPassword("")
      } else{
        setValidation(user.data.message);
      }
      
    } catch (error) {
      
    }
  };

  const handleSignUp = (_) => {
    console.log("Sign up");
  };

  console.log("values", values);

  return (
    <div>
      {!show ? (
        <div>
          <HomeNavagation />
          <br />
          <div style={!switchSignupbtn ? {display:"none"}: {display:"block"}}>
                    <p className="loginValidator"
                    style={
                      validation === "Logged in succesfully"
                        ? { color: "green", backgroundColor:"rgba(0, 128, 0, 0.392)" }
                        : { color: "red", backgroundColor:"rgba(255, 0, 0, 0.392)" }
                    }
                  >
                    {validation}
                  </p>

          </div>
          <div className="Container">
            <div>
              <div>
                <h1
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Welcome to Tumisang presentation...
                </h1>
              </div>
            </div>
            <div class="login-form">
              <form onSubmit={handleSignIn} class="sign-in-htm">
                {/* <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <input id="tab-1" type="radio" name="tab" />
                <label for="tab-1">Sign In</label>
              </div>
              <div>
                <input id="tab-2" type="radio" name="tab" />
                <label for="tab-2" class="tab">
                  Sign Up
                </label>
              </div>
            </div> */}
                <div class="group">
                  <br />
                  <label for="user" class="label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    class="input"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    class="input"
                    name="password"
                    data-type="password"
                    value={password}
                  />
                </div>
                <div class="group">
                  <input
                    name="isChecked"
                    // onChange={(e) => handleChange(e)}
                    type="checkbox"
                    />
                  <label for="check">Keep me Signed in</label>
                </div>
                    {!switchSignupbtn 
                    ?
                     ( <div class="group">
                     <input type="submit" className="btn btn-primary" value="Sign In" />
                   </div>) 
                     :
                      ( <Spinner />)
                      }
               
               
                <div class="hr"></div>
                {/* <div class="foot-lnk">
              <a href="#forgot" disabled="true">
                Forgot Password?
              </a>
            </div> */}
                <div></div>
              </form>
         
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Contents values={values} />
        </div>
      )}
    </div>
  );
}

export default Main;
