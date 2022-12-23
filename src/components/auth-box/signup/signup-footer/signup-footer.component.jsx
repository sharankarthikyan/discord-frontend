// importing built in libraries
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

// current component styles
import { FooterOuter } from "./signup-footer.styles";

// components
import CustomPrimaryButton from "../../../buttons/custom-primary-button/custom-primary-button.component";
import RedirectInfo from "../../redirect-info/redirect-info.component";

const getFormNotValidMessage = () => {
  return "Username should contains between 3 and 12 characters and password should contains atleast 8 characters";
};

const getFormValidMessage = () => {
  return "Press to signup!";
};

const SignupFooter = (props) => {
  const { handleSignup, isFormValid } = props;

  const navigate = useNavigate();

  const handlePushToSignupPage = () => {
    navigate("/login");
  };

  return (
    <FooterOuter>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="SIGNUP"
            additionalStyles={{ marginTop: "20px" }}
            disabled={!isFormValid}
            onClick={handleSignup}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToSignupPage}
      />
    </FooterOuter>
  );
};

export default SignupFooter;
