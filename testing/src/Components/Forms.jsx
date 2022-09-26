import React from "react";
import HomeNavagation from "../Components/HomeNavigation";
import Contents from "../Components/Contents";
import Spinner from "../Components/Spinner";

const Forms = (props) => {
  const {
    show,
    switchSignupbtn,
    validation,
    handleSignIn,
    setEmail,
    email,
    setPassword,
    password,
    auth,
    setAuth,
    handleAuth,
    // values,
  } = props;

  return (
    <div>
      <HomeNavagation />
      <br />

{!show ?
( 
<div>
<p style={{ textAlign: "center" }}>SignIn Form</p>
<div
  class="login-form"
  style={
    validation === "Logged in succesfully"
      ? {
          border: "1px solid green",
        }
      : { border: "1px solid red" }
  }
>
  <form onSubmit={handleSignIn} class="sign-in-htm">
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
    {/* <div class="group">
      <input
        name="isChecked"
        type="checkbox"
      />
      <label for="check">Keep me Signed in</label>
    </div> */}
    <br />
    <hr />
    <br />
    {!switchSignupbtn ? (
      <div class="group">
        <input
          type="submit"
          className="btn btn-primary"
          value="Sign In"
        />
      </div>
    ) : (
      <Spinner />
    )}
  </form>
  <br />
  <div style={{ display: "flex", gap: "12rem" }}>
    <div>
      <p style={{ marginLeft: "30px", color: "white" }}>
        Not a member?
        <a href="#" onClick={() => handleAuth("signUp")}>
          Signup
        </a>
      </p>
    </div>
    <div class="foot-lnk">
      <a href="#forgot">Forgot Password?</a>
    </div>
  </div>
  <br />
</div>
</div>
)
:
(
  <Contents/>
)}
     
    </div>
  );
};

export default Forms;
