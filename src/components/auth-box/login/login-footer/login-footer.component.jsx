// importing built in libraries
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

// current component styles
import { FooterOuter } from "./login-footer.styles";

// components
import CustomPrimaryButton from "../../../buttons/custom-primary-button/custom-primary-button.component";
import RedirectInfo from "../../redirect-info/redirect-info.component";

const getFormNotValidMessage = () => {
  return "Enter correct e-mail address and password should contains between 6 and 12 characters";
};

const getFormValidMessage = () => {
  return "Press to log in";
};

const LoginFooter = (props) => {
  const { handleLogin, isFormValid } = props;

  const navigate = useNavigate();

  const handlePushToSignupPage = () => {
    navigate("/signup");
  };

  return (
    <FooterOuter>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="LOGIN"
            additionalStyles={{ marginTop: "20px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToSignupPage}
      />
    </FooterOuter>
  );
};

export default LoginFooter;
