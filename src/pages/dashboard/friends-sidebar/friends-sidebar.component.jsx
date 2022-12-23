// styles
import { FriendsSideBarContainer } from "./friends-sidebar.styles";

// component
import AddFriendButton from "./add-friend-button/add-friend-button.component";
import FriendsTitle from "./friends-title/friends-title.component";
import FriendsList from "./friends-list/friends-list.component";
import PendingInvitationList from "./pending-invitation-list/pending-invitation-list.component";

const FriendsSideBar = () => {
  return (
    <FriendsSideBarContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationList />
    </FriendsSideBarContainer>
  );
};

export default FriendsSideBar;
