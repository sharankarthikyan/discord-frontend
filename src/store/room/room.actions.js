import { RoomActionTypes } from "./room.types";

export const setOpenRoom = (
  isUserRoomCreator = false,
  isUserInRoom = false
) => {
  return {
    type: RoomActionTypes.OPEN_ROOM,
    isUserRoomCreator: isUserRoomCreator,
    isUserInRoom,
  };
};

export const setRoomDetails = (roomDetails) => {
  return {
    type: RoomActionTypes.SET_ROOM_DETAILS,
    roomDetails,
  };
};

export const setActiveRooms = (activeRooms) => {
  return {
    type: RoomActionTypes.SET_ACTIVE_ROOMS,
    activeRooms,
  };
};

export const setLocalStream = (localStream) => {
  return {
    type: RoomActionTypes.SET_LOCAL_STREAM,
    localStream,
  };
};

export const setAudioOnly = (audioOnly) => {
  return {
    type: RoomActionTypes.SET_AUDIO_ONLY,
    audioOnly,
  };
};

export const setRemoteStreams = (remoteStreams) => {
  return {
    type: RoomActionTypes.SET_REMOTE_STREAMS,
    remoteStreams,
  };
};

export const setScreenSharingStream = (stream) => {
  return {
    type: RoomActionTypes.SET_SCREEN_SHARE_STREAM,
    isScreenSharingActive: stream ? true : false,
    screenSharingStream: stream || null,
  };
};

export const setIsUserJoinedOnlyWithAudio = (onlyWithAudio) => {
  return {
    type: RoomActionTypes.SET_IS_USER_JOINED_WITH_ONLY_AUDIO,
    isUserJoinedWithOnlyAudio: onlyWithAudio,
  };
};

export const getActions = (dispatch) => {
  return {
    setAudioOnly: (audioOnly) => dispatch(setAudioOnly(audioOnly)),
    setScreenSharingStream: (stream) => {
      dispatch(setScreenSharingStream(stream));
    },
  };
};
