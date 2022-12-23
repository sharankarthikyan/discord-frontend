import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

import * as webRTCHandler from "../../../../../realtime-communication/handlers/webrtc.handler";

const constraints = {
  audio: false,
  video: true,
};

const ScreenShareButton = (props) => {
  const {
    localStream,
    screenSharingStream,
    setScreenSharingStream,
    isScreenSharingActive,
  } = props;

  console.log(isScreenSharingActive);
  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log(
          "error occurred when trying to get an access to screen share stream",
          err
        );
      }

      if (stream) {
        setScreenSharingStream(stream);
        // webRTCHandler.switchOutgoing video tracks
        webRTCHandler.switchOutgoingTracks(stream);
      }
    } else {
      // webRTCHandler.switchOutgoingTracks
      webRTCHandler.switchOutgoingTracks(localStream);

      screenSharingStream.getTracks().forEach((track) => track.stop());
      setScreenSharingStream(null);
    }
  };

  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: "white" }}>
      {isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
