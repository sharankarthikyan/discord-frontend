// components
import InputWithLabel from "../../../label-inputs/input-with-label.component";

const SignupInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;

  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="test"
        id="email"
        placeholder="Enter email address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        id="username"
        placeholder="Enter username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        id="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default SignupInputs;
