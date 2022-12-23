import { ChatActionTypes } from "./chat.types";

const INITIAL_STATE = {
  chosenChatDetails: null,
  chatType: null,
  messages: [],
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChatActionTypes.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chosenChatDetails: action.chosenChatDetails,
        chatType: action.chatType,
        messages: [],
      };
    case ChatActionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default chatReducer;
