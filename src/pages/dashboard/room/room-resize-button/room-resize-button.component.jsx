import IconButton from "@mui/material/IconButton";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import { RoomSizeButtonMainContainer } from "./room-resize-button.styles";

const RoomResizeButton = (props) => {
  const { isRoomMinimized, handleRoomResize } = props;

  return (
    <RoomSizeButtonMainContainer>
      <IconButton style={{ color: "white" }} onClick={handleRoomResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
      </IconButton>
    </RoomSizeButtonMainContainer>
  );
};

export default RoomResizeButton;
