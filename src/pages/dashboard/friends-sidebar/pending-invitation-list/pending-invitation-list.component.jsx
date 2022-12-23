import { connect } from "react-redux";

// styles
import PendingInvitationListItem from "./pending-invitation-list-item/pending-invitation-list-item.component";
import { PendingInvListContainer } from "./pending-invitation-list.styles";

const PendingInvitationList = ({ pendingFriendsInvitations }) => {
  return (
    <PendingInvListContainer>
      {pendingFriendsInvitations.map((invitation) => {
        return (
          <PendingInvitationListItem
            key={invitation._id}
            id={invitation._id}
            username={invitation.senderId.username}
            mail={invitation.senderId.mail}
          />
        );
      })}
    </PendingInvListContainer>
  );
};

const mapStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStateToProps)(PendingInvitationList);
