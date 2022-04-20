import StyledLogin from "./styles";
import Form from "../../components/Form";
import Input from "../../components/Input";
import DefaultButton from "../../components/DefaultButton";

const Login = () => {
  return (
    <StyledLogin>
      <img alt="kenzieHub logo" src="./logo.svg" />
      <div>
        <h3>Login</h3>
        <Form>
          <label htmlFor="#">Email</label>
          <Input type="email" placeholder="Email..." />
          <label htmlFor="#">Senha</label>
          <Input type="password" placeholder="Informe sua senha..." />
          <DefaultButton background="#FF577F" color="#FFF">
            Entrar
          </DefaultButton>
        </Form>
        <p>Ainda não possui uma conta?</p>
        <DefaultButton background="#868E96" color="#FFF">
          Cadastre-se
        </DefaultButton>
      </div>
    </StyledLogin>
  );
};

export default Login;
