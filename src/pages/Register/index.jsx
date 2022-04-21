import Form from "../../components/Form";
import Input from "../../components/Input";
import Header from "../../components/Header";
import FormContainer from "../../components/FormContainer";
import DefaultButton from "../../components/DefaultButton";
import StyledContainer from "../../components/StyledContainer";

const Register = () => {
  return (
    <StyledContainer>
      <Header>
        <img alt="kenzieHub logo" src="./logo.svg" />
        <DefaultButton maxWidth="79.54px" background="#212529" color="white">
          Voltar
        </DefaultButton>
      </Header>
      <FormContainer>
        <h3>Crie sua conta</h3>
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
    </StyledContainer>
  );
};

export default Register;
