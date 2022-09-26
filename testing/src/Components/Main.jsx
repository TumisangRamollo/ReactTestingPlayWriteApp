import React, { useState } from "react";
import axios from "axios";
import Form from "../Components/Forms";
import SignUpForm from "../Components/SignUpForm";
import Contents from "../Components/Contents";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Main() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validation, setValidation] = useState();
  const [show, setShow] = useState(false);
  const [values, setValues] = useState([]);
  const [switchSignupbtn, setswitchSignupbtn] = useState(false);
  const [auth, setAuth] = useState();
  const [validatePassword, setValidatePassword] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  // const [auth, setAuth] = useState();
  // const [auth, setAuth] = useState();
  // const [auth, setAuth] = useState();
  // const [auth, setAuth] = useState();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const user = await axios.post("http://localhost:4003/login", data);

    try {
      if (email === user.data.foundUser.email && email !== "") {
        setValues([values, user.data.foundUser.email, user.data.date]);
        setswitchSignupbtn(true);
        setValidation(user.data.message);
        setTimeout(function() {
          setShow(true);
        }, 3000);
        setEmail("");
        setPassword("");
        Navigate("/contents");
      } else {
        setValidation(user.data.message);
      }
    } catch (error) {}
  };

  const handleAuth = (id) => {
    setAuth(id);
  };

  const handleSignUp = async(e) => {
e.preventDefault()
  };

  return (
    <div>
      <Contents />
      {/* <BrowserRouter>
        <div>
          {auth !== "signIn" ? (
            <Form
              show={show}
              switchSignupbtn={switchSignupbtn}
              validation={validation}
              handleSignIn={handleSignIn}
              setEmail={setEmail}
              email={email}
              setPassword={setPassword}
              password={password}
              values={values}
              handleAuth={handleAuth}
              setAuth={setAuth}
              auth={auth}
            />
          ) : (
            <SignUpForm
              handleAuth={handleAuth}
              setAuth={setAuth}
              auth={auth}
              handleSignUp={handleSignUp}
              firstname={firstname}
              lastname={lastname}
              password={password}
              email={email}
              validatePassword={validatePassword}
              setEmail={setEmail}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setValidatePassword={setValidatePassword}
              setPassword={setPassword}
              switchSignupbtn={switchSignupbtn}
            />
          )}
          <Routes>
            <Route path="/contents" element={<Contents />} />
          </Routes>
        </div>
      </BrowserRouter> */}
    </div>
  );
}

export default Main;
