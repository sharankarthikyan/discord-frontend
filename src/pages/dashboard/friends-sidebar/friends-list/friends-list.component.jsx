import { connect } from "react-redux";

// styles
import { FriendListContainer } from "./friends-list.styles";

// components
import FriendsListItem from "./friend-list-item/friend-list-item.component";

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  });

  return friends;
};

const FriendsList = ({ friends, onlineUsers }) => {
  return (
    <FriendListContainer>
      {checkOnlineUsers(friends, onlineUsers).map((friend) => {
        return (
          <FriendsListItem
            key={friend.id}
            id={friend.id}
            username={friend.username}
            isOnline={friend.isOnline}
          />
        );
      })}
    </FriendListContainer>
  );
};

const mapStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStateToProps)(FriendsList);
