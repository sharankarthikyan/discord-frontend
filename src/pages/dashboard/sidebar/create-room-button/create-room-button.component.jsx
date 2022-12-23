import AddIcon from "@mui/icons-material/Add";

import { MainButtonWrapper } from "./create-room-button.styles";

import * as roomHandler from "../../../../realtime-communication/handlers/room.handler";

const CreateRoomButton = (props) => {
  const { isUserInRoom } = props;

  const createNewRoomHandler = () => {
    // creating a room and sending info to the server about it
    roomHandler.createNewRoom();
  };

  return (
    <MainButtonWrapper disabled={isUserInRoom} onClick={createNewRoomHandler}>
      <AddIcon />
    </MainButtonWrapper>
  );
};

export default CreateRoomButton;
