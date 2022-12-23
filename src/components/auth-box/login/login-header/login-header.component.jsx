// importing built in libraries
import { Typography } from "@mui/material";

import { LoginHeaderWrapper } from "./login-header.styles";

const LoginHeader = () => {
  return (
    <LoginHeaderWrapper>
      <Typography variant="h5" sx={{ fontWeight: 700, fontSize: "32px" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
        We are happy that you are with us!
      </Typography>
    </LoginHeaderWrapper>
  );
};

export default LoginHeader;
