import React from "react";
import Form from "../layouts/Form";

function SignIn() {
  return (
    <Form
      title="Login your Account"
      showForgotPassword={true}
      buttonText="Continue"
      bottomText="Don’t have an account?"
      bottomLinkText="Create Account"
      bottomLinkPath="/signup"
    />
  );
}

export default SignIn;


