// importing built in libraries
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import AuthBox from "../../../components/auth-box/auth-box.component";
import SignupInputs from "../../../components/auth-box/signup/signup-inputs/signup-inputs.component";
import SignupFooter from "../../../components/auth-box/signup/signup-footer/signup-footer.component";

// utils
import { validateSignupForm } from "../../../utils/validators";

// actions
import { getActions } from "../../../store/user/user.actions";

const SignUpPage = ({ signup, userDetails }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (userDetails) {
      navigate("/");
    }

    setIsFormValid(validateSignupForm({ mail, username, password }));
  }, [mail, username, password, setIsFormValid]);

  const handleSignup = () => {
    const userDetails = {
      mail,
      username,
      password,
    };

    signup(userDetails, navigate);
  };

  return (
    <AuthBox additionalStyles={{ height: "500px", width: "500px" }}>
      <Typography variant="h5">Create an account</Typography>
      <SignupInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <SignupFooter handleSignup={handleSignup} isFormValid={isFormValid} />
    </AuthBox>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    ...user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
