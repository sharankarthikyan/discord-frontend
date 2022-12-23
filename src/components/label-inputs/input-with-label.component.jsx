// importing built in libraries
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

// current component styles
import { Wrapper } from "./input-with-label.styles";

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder, id } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <TextField
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        id={id}
        label={`${label}*`}
        InputLabelProps={{
          style: { fontSize: 16, lineHeight: "19px", color: "#B9BBBE" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {label === "Password" ? <LockIcon /> : <AccountCircle />}
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Wrapper>
  );
};

export default InputWithLabel;
