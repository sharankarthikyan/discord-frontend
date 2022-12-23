// importing built in libraries
import React from "react";
import Box from "@mui/material/Box";

// current component styles
import { BoxWrapper, ImageWrapper } from "./auth-box.styles";

const AuthBox = (props) => {
  const { additionalStyles } = props;
  return (
    <BoxWrapper>
      <ImageWrapper>
        <Box
          sx={{
            bgcolor: " rgba(54, 57, 63, 0.8)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
          }}
          style={additionalStyles ? additionalStyles : {}}
        >
          {props.children}
        </Box>
      </ImageWrapper>
    </BoxWrapper>
  );
};

export default AuthBox;
