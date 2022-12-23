import { connect } from "react-redux";

// styles
import { SideBarContainer } from "./sidebar.styles";

// components
import MainPageButton from "./main-page-button/main-page-button.component";
import CreateRoomButton from "./create-room-button/create-room-button.component";
import ActiveRoomButton from "./active-room-button/active-room-button.component";

const SideBar = ({ activeRooms, isUserInRoom }) => {
  console.log(activeRooms);
  return (
    <SideBarContainer>
      <MainPageButton />
      <CreateRoomButton isUserInRoom={isUserInRoom} />
      {activeRooms.map((room) => (
        <ActiveRoomButton
          key={room.roomId}
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          isUserInRoom={isUserInRoom}
        />
      ))}
    </SideBarContainer>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStateToProps)(SideBar);
