import Form from "../../components/Form";
import Input from "../../components/Input";
import DefaultButton from "../../components/DefaultButton";
import StyledContainer from "../../components/StyledContainer";

const Login = () => {
  return (
    <StyledContainer>
      <img alt="kenzieHub logo" src="./logo.svg" />
      <div className="separaForm">
        <h3>Login</h3>
        <Form>
          <label htmlFor="#">Email</label>
          <Input type="email" border="#FFF" placeholder="Email..." />
          <label htmlFor="#">Senha</label>
          <Input
            type="password"
            border="#FFF"
            placeholder="Informe sua senha..."
          />
          <DefaultButton background="#FF577F" color="#FFF">
            Entrar
          </DefaultButton>
        </Form>
        <p>Ainda não possui uma conta?</p>
        <DefaultButton background="#868E96" color="#FFF">
          Cadastre-se
        </DefaultButton>
      </div>
    </StyledContainer>
  );
};

export default Login;
