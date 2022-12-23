// importing built in libraries
import React, { useEffect } from "react";
import { connect } from "react-redux";

// current component styles
import { DashBoardWrapper } from "./dashboard.styles";

// components
import SideBar from "./sidebar/sidebar.component";
import FriendsSideBar from "./friends-sidebar/friends-sidebar.component";
import MessengerBar from "./messenger/messenger.component";
import AppBar from "./app-bar/app-bar.component";
import Room from "./room/room.component";

import { logout } from "../../utils/auth";

import { connectWithSocketServer } from "../../realtime-communication/socket-connection";

const DashboardPage = ({ userDetails, isUserInRoom }) => {
  useEffect(() => {
    if (!userDetails) {
      logout();
    } else {
      connectWithSocketServer(userDetails);
    }
  }, []);

  return (
    <DashBoardWrapper>
      <SideBar />
      <FriendsSideBar />
      <MessengerBar />
      <AppBar />
      {isUserInRoom && <Room />}
    </DashBoardWrapper>
  );
};

const mapStateToProps = ({ user, room }) => ({
  userDetails: user?.userDetails,
  ...room,
});

export default connect(mapStateToProps)(DashboardPage);
