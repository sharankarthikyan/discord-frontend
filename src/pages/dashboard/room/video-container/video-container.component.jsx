import { connect } from "react-redux";

import { VideoMainContainer } from "./video-container.styles";

import Video from "./video/video.component";

const VideoContainer = (props) => {
  const { localStream, remoteStreams, screenSharingStream } = props;

  return (
    <VideoMainContainer>
      <Video
        stream={screenSharingStream ? screenSharingStream : localStream}
        isLocalStream
      />
      {remoteStreams.map((stream) => (
        <Video stream={stream} key={stream.id} />
      ))}
    </VideoMainContainer>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStateToProps)(VideoContainer);
