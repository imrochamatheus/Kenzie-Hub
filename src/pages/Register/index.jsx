import Form from "../../components/Form";
import Input from "../../components/Input";
import DefaultButton from "../../components/DefaultButton";
import StyledContainer from "../../components/StyledContainer";

const Register = () => {
  return (
    <StyledContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "297px",
        }}
      >
        <img alt="kenzieHub logo" src="./logo.svg" />
        <DefaultButton maxWidth="79.54px" background="#212529" color="white">
          Voltar
        </DefaultButton>
      </div>
      <div className="separaForm">
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
      </div>
    </StyledContainer>
  );
};

export default Register;
