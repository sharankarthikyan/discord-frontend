import { store } from "../store/store";

import { setMessages } from "../store/chat/chat.actions";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  const state = store.getState();

  // find id of user from token and id from active conversation
  const receiverId = state.chat.chosenChatDetails?.id;
  const userId = state.user.userDetails?._id;

  if (receiverId && userId) {
    const usersInCoversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      usersInCoversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInCoversation,
  messages,
}) => {
  const result = participants.every(function (participantId) {
    return usersInCoversation.includes(participantId);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
