import { useEffect, useRef } from "react";

import { VideoMainContainer, VideoEl } from "./video.styles";

const Video = (props) => {
  const { stream, isLocalStream, isScreenShareWindow } = props;
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <VideoMainContainer>
      <VideoEl
        style={isScreenShareWindow ? {} : { transform: "scaleX(-1)" }}
        ref={videoRef}
        autoPlay
        muted={isLocalStream ? true : false}
      />
    </VideoMainContainer>
  );
};

export default Video;
