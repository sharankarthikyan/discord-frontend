import React, { useEffect } from "react";

import { getDirectChatHistory } from "../../../../realtime-communication/socket-connection";

import { MessagerContentContainer } from "./messager-content.styles";

import Messages from "./messages/messages.component";
import NewMessageInput from "./message-input/message-input.component";

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);

  return (
    <MessagerContentContainer>
      <Messages />
      <NewMessageInput />
    </MessagerContentContainer>
  );
};

export default MessengerContent;
