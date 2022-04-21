import Form from "../../components/Form";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Box from "../../components/Box";
import DefaultButton from "../../components/DefaultButton";
import MainContainer from "../../components/MainContainer";
import FormContainer from "../../components/FormContainer";

const Login = () => {
  return (
    <MainContainer>
      <Box justifyContent="center">
        <img alt="kenzieHub logo" src="./logo.svg" />
      </Box>
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
        <Text size="9.63" color="#868E96" align="center">
          Ainda não possui uma conta?
        </Text>
        <DefaultButton background="#868E96" color="#FFF">
          Cadastre-se
        </DefaultButton>
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
