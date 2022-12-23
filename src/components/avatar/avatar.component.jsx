// styles
import { AvatarWrapper } from "./avatar.styles";

const Avatar = (props) => {
  const { username, large } = props;
  return (
    <AvatarWrapper style={large ? { height: "80px", width: "80px" } : {}}>
      {username.substring(0, 2)}
    </AvatarWrapper>
  );
};

export default Avatar;
