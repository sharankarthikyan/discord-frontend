// libraries
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { connect } from "react-redux";

// component
import Avatar from "../../../../../components/avatar/avatar.component";
import OnlineIndicator from "./online-indicator/online-indicator.component";

import { ChatTypes, getActions } from "../../../../../store/chat/chat.actions";

const FriendListItem = (props) => {
  const { id, username, isOnline, setChosenChatDetails } = props;

  const handleChooseActiveConversation = () => {
    setChosenChatDetails({ id: id, name: username }, ChatTypes.DIRECT);
  };

  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(FriendListItem);
