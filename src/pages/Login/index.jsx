import StyledLogin from "./StyledLogin";
import Button from "../../components/Button";
import CustomFieldSet from "../../components/FieldSet";

const Login = () => {
  return (
    <StyledLogin>
      <img alt="Kenzie hub logo" src="./logo.svg" />
      <form>
        <CustomFieldSet label="Email" type="email" background="#343B41" />
        <CustomFieldSet label="Senha" type="password" background="#343B41" />
        <Button color="#FFF" background="#FF577F">
          Entrar
        </Button>
      </form>
    </StyledLogin>
  );
};

export default Login;
