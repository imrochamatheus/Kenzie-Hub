import Form from "../../components/Form";
import Input from "../../components/Input";
import Header from "../../components/Header";
import DefaultButton from "../../components/DefaultButton";
import StyledContainer from "../../components/StyledContainer";
import FormContainer from "../../components/FormContainer";

const Login = () => {
  return (
    <StyledContainer>
      <Header justifyContent="center">
        <img alt="kenzieHub logo" src="./logo.svg" />
      </Header>
      <FormContainer>
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
      </FormContainer>
    </StyledContainer>
  );
};

export default Login;
