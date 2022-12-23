import { useState } from "react";

import { RoomMainContainer } from "./room.styles";

import RoomResizeButton from "./room-resize-button/room-resize-button.component";
import RoomButtons from "./room-buttons/room-buttons.component";
import VideoContainer from "./video-container/video-container.component";

const fullScreenStyle = {
  width: "100%",
  height: "100vh",
};

const minimizedRoomStyle = {
  bottom: "0px",
  right: "0px",
  width: "30%",
  height: "40vh",
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };

  return (
    <RoomMainContainer
      style={isRoomMinimized ? minimizedRoomStyle : fullScreenStyle}
    >
      <VideoContainer />
      <RoomButtons />
      <RoomResizeButton
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={roomResizeHandler}
      />
    </RoomMainContainer>
  );
};

export default Room;
