// importing built in libraries
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import AuthBox from "../../../components/auth-box/auth-box.component";
import LoginHeader from "../../../components/auth-box/login/login-header/login-header.component";
import LoginInputs from "../../../components/auth-box/login/login-inputs/login-inputs.component";
import LoginFooter from "../../../components/auth-box/login/login-footer/login-footer.component";

// utils
import { validateLoginForm } from "../../../utils/validators";

// actions
import { getActions } from "../../../store/user/user.actions";

const LoginPage = ({ login, userDetails }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (userDetails) {
      navigate("/");
    }

    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };

    login(userDetails, navigate);
  };

  return (
    <AuthBox additionalStyles={{ height: "500px", width: "500px" }}>
      <LoginHeader />
      <LoginInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
