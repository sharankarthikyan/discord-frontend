import { connect } from "react-redux";

// styles
import { MessengerMainContainer } from "./messenger.styles";

// components
import WelcomeMessage from "./welcome-message/welcome-message.component";
import MessagerContent from "./messager-content/messager-content.component";

const MessengerBar = (props) => {
  const { chosenChatDetails } = props;

  return (
    <MessengerMainContainer>
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessagerContent chosenChatDetails={chosenChatDetails} />
      )}
    </MessengerMainContainer>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStateToProps)(MessengerBar);
