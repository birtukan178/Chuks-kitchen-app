import React from "react";
import Form from "../layouts/Form";

function SignUp() {
  return (
    <Form
      title="Create your Account"
      showPhone={true}
      showConfirmPassword={true}
      showTerms={true}
      buttonText="Sign Up"
      bottomText="Already have an account?"
      bottomLinkText="Sign In"
      bottomLinkPath="/signin"
    />
  );
}

export default SignUp;
