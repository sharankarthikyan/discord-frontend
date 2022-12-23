// importing built in libraries
import Button from "@mui/material/Button";

const CustomPrimaryButton = (props) => {
  const { label, additionalStyles, disabled, onClick } = props;
  return (
    <Button
      variant="contained"
      sx={{ width: "100%", height: "40px", fontWeight: 500, fontSize: "16px" }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
