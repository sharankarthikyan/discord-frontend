import { ChatActionTypes } from "./chat.types";

export const ChatTypes = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

export const setChosenChatDetails = (chatDetails, chatType) => {
  return {
    type: ChatActionTypes.SET_CHOSEN_CHAT_DETAILS,
    chatType,
    chosenChatDetails: chatDetails,
  };
};

export const setMessages = (messages) => {
  return {
    type: ChatActionTypes.SET_MESSAGES,
    messages,
  };
};

export const getActions = (dispatch) => {
  return {
    setChosenChatDetails: (details, chatType) =>
      dispatch(setChosenChatDetails(details, chatType)),
  };
};
