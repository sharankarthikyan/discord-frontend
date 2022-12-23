import { Typography } from "@mui/material";

import { WelcomeContainer } from "./welcome-message.styles";

const WelcomeMessage = () => {
  return (
    <WelcomeContainer>
      <Typography variant="h6" sx={{ color: "white" }}>
        To start chatting - choose conversation
      </Typography>
    </WelcomeContainer>
  );
};

export default WelcomeMessage;
