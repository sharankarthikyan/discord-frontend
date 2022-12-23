import { connect } from "react-redux";

import { RoomButtonContainer } from "./room-buttons.styles";

import ScreenShareButton from "./screen-share-button/screen-share-button.component";
import MicButton from "./mic-button/mic-button.component";
import CloseRoomButton from "./close-room-button/close-room-button.component";
import CameraButton from "./camera-button/camera-button.component";

import { getActions } from "../../../../store/room/room.actions";

const RoomButtons = (props) => {
  const { localStream, isUserJoinedWithOnlyAudio } = props;

  return (
    <RoomButtonContainer>
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
    </RoomButtonContainer>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomButtons);
