import React from "react";
import Typography from "@mui/material/Typography";

import Avatar from "../../../../../../components/avatar/avatar.component";

import {
  MessageMainContainer,
  AvatarContainer,
  MessageContainer,
  MessageContent,
  SameAuthorMessageContent,
  SameAuthorMessageText,
} from "./message.styles";

const Message = ({ content, sameAuthor, username, date, sameDay }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MessageMainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: "16px", color: "white" }}>
          {username}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MessageMainContainer>
  );
};

export default Message;
