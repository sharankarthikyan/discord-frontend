import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { connect } from "react-redux";

// actions
import { getActions } from "../../../../../store/friends/friends.actions";

// components
import Avatar from "../../../../../components/avatar/avatar.component";
import InvitationDecisionButtons from "./invitation-decision-buttons/invitation-decision-buttons.component";

const PendingInvitationListItem = (props) => {
  const { id, username, mail, acceptFriendInvitation, rejectFriendInvitation } =
    props;

  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  return (
    // <Tooltip title={mail}>
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "42px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar username={username} />
        <Typography
          sx={{
            marginLeft: "7px",
            fontWeight: 700,
            color: "#8e9297",
            flexGrow: 1,
          }}
          variant="subtitle1"
        >
          {username}
        </Typography>
        <InvitationDecisionButtons
          disabled={buttonsDisabled}
          acceptFriendInvitation={handleAcceptInvitation}
          rejectFriendInvitation={handleRejectInvitation}
        />
      </Box>
    </div>
    // </Tooltip>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(PendingInvitationListItem);
