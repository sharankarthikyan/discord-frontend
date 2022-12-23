import React from "react";
import Typography from "@mui/material/Typography";

import Avatar from "../../../../../../components/avatar/avatar.component";

import { MessageHeaderMainContainer } from "./messages-header.styles";

const MessagesHeader = ({ name = "" }) => {
  return (
    <MessageHeaderMainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        This is the beginning of your conversation with {name}
      </Typography>
    </MessageHeaderMainContainer>
  );
};

export default MessagesHeader;
