// importing built in libraries
import { Typography } from "@mui/material";

// current component libraries
import { RedirectText } from "./redirect-info.styles";

const RedirectInfo = (props) => {
  const { text, redirectText, additionalStyles, redirectHandler } = props;

  return (
    <Typography
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}{" "}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
