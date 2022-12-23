// importing built in libraries
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import userReducer from "./user/user.reducer";
import alertReducer from "./alert/alert.reducer";
import friendsReducer from "./friends/friends.reducer";
import chatReducer from "./chat/chat.reducer";
import roomReducer from "./room/room.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // If you need to persist(store) something append this array
};

const rootReducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer,
  room: roomReducer,
});

export default persistReducer(persistConfig, rootReducer);
