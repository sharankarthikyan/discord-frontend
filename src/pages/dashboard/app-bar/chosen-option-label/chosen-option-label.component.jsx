import { Typography } from "@mui/material";
import { connect } from "react-redux";

const ChosenOptionLabel = (props) => {
  const { name } = props;

  return (
    <Typography
      sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
    >{`${name ? name : ""}`}</Typography>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    name: chat?.chosenChatDetails?.name,
  };
};

export default connect(mapStateToProps)(ChosenOptionLabel);
