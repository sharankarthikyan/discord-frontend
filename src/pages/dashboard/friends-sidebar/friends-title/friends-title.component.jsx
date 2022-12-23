// styles
import {} from "./friends-title.styles";

import { Typography } from "@mui/material";

const FriendsTitle = (props) => {
  const { title } = props;

  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "#8e9297",
        fontSize: "14px",
        marginTop: "20px",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
