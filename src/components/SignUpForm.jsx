import React from "react";
import "./SignUpStyles.css";

const SignUpForm = () => {
  return (
    <div className="signup-container">
      <h1>Get started with a free account</h1>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button>Get Started!</button>
      </form>
    </div>
  );
};

export default SignUpForm;
