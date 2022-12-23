import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import * as roomHandler from "../../../../../realtime-communication/handlers/room.handler";

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {
    roomHandler.leaveRoom();
  };

  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
