import React from "react";
import HomeNavagation from "../Components/HomeNavigation";
import Spinner from "../Components/Spinner";

const SignUpForm = (props) => {
  const {
    handleSignUp,
    firstname,
    lastname,
    password,
    email,
    validatePassword,
    setEmail,
    setFirstName,
    setLastName,
    setValidatePassword,
    setPassword,
    Spinner,
    switchSignupbtn,
    handleAuth,
    auth,
  } = props;
  return (
    <div>
      <HomeNavagation />

      <p style={{ textAlign: "center" }}>Signup Form</p>
      <div class="login-form">
        <form onSubmit={handleSignUp} class="sign-in-htm">
          <div class="group">
            <br />
            <label for="user" class="label">
              First Name
            </label>
            <input
              name="firstname"
              type="text"
              class="input"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
          </div>
          <div class="group">
            <br />
            <label for="user" class="label">
              Last Name
            </label>
            <input
              name="lastname"
              type="text"
              class="input"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
            />
          </div>

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
            <br />
            <label for="user" class="label">
              Password
            </label>
            <input
              name="password"
              type="password"
              class="input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div class="group">
            <br />
            <label for="user" class="label">
              Confirm Password
            </label>
            <input
              name="validatePassword"
              type="password"
              class="input"
              onChange={(e) => setValidatePassword(e.target.value)}
              value={validatePassword}
            />
          </div>
          <div>
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
          </div>
          <br />
        </form>
        <div>
          <p style={{marginLeft:"30px" , color:"white"}}>
            Already have an account?{" "}
            <a href="#" onClick={() => handleAuth("signIn")}>
              Login here
            </a>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
