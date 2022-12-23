import io from "socket.io-client";

import { store } from "../store/store";

import {
    setPendingFriendsInvitations,
    setFriends,
    setOnlineUsers,
} from "../store/friends/friends.actions";

import { updateDirectChatHistoryIfActive } from "../utils/chat";

import * as roomHandler from "./handlers/room.handler";
import * as webRTCHandler from "./handlers/webrtc.handler";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    // process.env.REACT_APP_PRIVATE_IP
    socket = io(`http://localhost:8080`, {
        auth: {
            token: jwtToken,
        },
    });

    // These are all observers - they will receive data from socket server emision.
    socket.on("connect", () => {
        console.log("succesfully connected with socket.io server");
    });

    socket.on("friends-invitations", (data) => {
        const { pendingInvitations } = data;

        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    });

    socket.on("friends-list", (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends));
    });

    socket.on("online-users", (data) => {
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers));
    });

    socket.on("direct-chat-history", (data) => {
        console.log(data);
        updateDirectChatHistoryIfActive(data);
    });

    socket.on("room-create", (data) => {
        console.log("created room details came from the server");
        console.log(data);
        roomHandler.newRoomCreated(data);
    });

    socket.on("active-rooms", (data) => {
        console.log(data);
        roomHandler.updateActiveRooms(data);
    });

    socket.on("conn-prepare", (data) => {
        const { connUserSocketId } = data;
        webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
        socket.emit("conn-init", { connUserSocketId: connUserSocketId });
    });

    socket.on("conn-init", (data) => {
        const { connUserSocketId } = data;
        webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
    });

    socket.on("conn-signal", (data) => {
        webRTCHandler.handleSignalingData(data);
    });

    socket.on("room-participant-left", (data) => {
        console.log("user left room");
        webRTCHandler.handleParticipantLeftRoom(data);
    });
};

// These are all emitters - they will send data to socket server.
export const sendDirectMessage = (data) => {
    console.log(data);
    socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
    debugger;
    socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
    socket.emit("room-create");
};

export const joinRoom = (data) => {
    socket.emit("room-join", data);
};

export const leaveRoom = (data) => {
    socket.emit("room-leave", data);
};

export const signalPeerData = (data) => {
    socket.emit("conn-signal", data);
};
