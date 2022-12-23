import { FriendsActionTypes } from "./friends.types";

const INITIAL_STATE = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const friendsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FriendsActionTypes.SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    case FriendsActionTypes.SET_PENDING_FRIENDS_INVITATIONS:
      return {
        ...state,
        pendingFriendsInvitations: action.pendingFriendsInvitations,
      };
    case FriendsActionTypes.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };
    default:
      return state;
  }
};

export default friendsReducer;
