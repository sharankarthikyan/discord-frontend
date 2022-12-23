import { Tooltip } from "@mui/material";

import Avatar from "../../../../components/avatar/avatar.component";

import { MainButtonWrapper } from "./active-room-button.styles";

import * as roomHandler from "../../../../realtime-communication/handlers/room.handler";

const ActiveRoomButton = (props) => {
  const { creatorUsername, roomId, amountOfParticipants, isUserInRoom } = props;

  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      // Join room
      roomHandler.joinRoom(roomId);
    }
  };

  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`;

  return (
    <Tooltip title={roomTitle}>
      <div>
        <MainButtonWrapper
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
        >
          <Avatar username={creatorUsername}></Avatar>
        </MainButtonWrapper>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
