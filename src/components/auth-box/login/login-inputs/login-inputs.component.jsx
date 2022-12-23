// importing built in libraries
import InputWithLabel from "../../../label-inputs/input-with-label.component";

const LoginInputs = (props) => {
  const { mail, setMail, password, setPassword } = props;

  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter email address"
        id="email"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
        id="password"
      />
    </>
  );
};

export default LoginInputs;
