import Form from "../../components/Form";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Box from "../../components/Box";
import FormContainer from "../../components/FormContainer";
import DefaultButton from "../../components/DefaultButton";
import MainContainer from "../../components/MainContainer";

const Register = () => {
  return (
    <MainContainer>
      <Box>
        <img
          alt="kenzieHub logo"
          src="./logo.svg"
          width="122.06px"
          height="16.92px"
        />
        <DefaultButton
          maxWidth="79.54px"
          background="#212529"
          color="white"
          height="32px"
        >
          Voltar
        </DefaultButton>
      </Box>
      <FormContainer>
        <Box flexDirection="column" gap="22px">
          <h3>Crie sua conta</h3>
          <Text size="12" color="#868E96">
            Rápido e grátis, vamos nessa
          </Text>
        </Box>
        <Form>
          <label htmlFor="#">Nome</label>
          <Input type="text" placeholder="Nome..." />
          <label htmlFor="#">Email</label>
          <Input type="email" placeholder="Email..." />
          <label htmlFor="#">Senha</label>
          <Input type="password" placeholder="Informe sua senha..." />
          <label htmlFor="#">Confirmar senha</label>
          <Input type="password" placeholder="Confirme sua senha..." />
          <label htmlFor="#">Selecionar mósulo</label>
          <Input type="select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </Input>
          <DefaultButton background="#59323F" color="#FFF">
            Cadastrar
          </DefaultButton>
        </Form>
      </FormContainer>
    </MainContainer>
  );
};

export default Register;
