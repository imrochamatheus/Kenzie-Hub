import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../../components/Form";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Box from "../../components/Box";
import FormContainer from "../../components/FormContainer";
import DefaultButton from "../../components/DefaultButton";
import MainContainer from "../../components/MainContainer";

const schema = yup.object().shape({
  nome: yup
    .string()
    .required("O campo nome é obrigatório!")
    .matches(/^[a-zA-Z|| ]+$/, "O campo nome deve possuir apenas letras"),

  email: yup
    .string()
    .email("Informe um email válido!")
    .required("O campo email é obrigatório!"),

  password: yup.string().required("O campo senha é obrigatório!"),

  passwordConfirmation: yup
    .string()
    .required("Confirme sua senha")
    .oneOf(
      [yup.ref("password"), "As senhas devem coincidir"],
      "As senhas devem coincidir"
    ),
});

const Register = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/", { replace: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (formData) => {
    console.log(formData);
  };

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
          onClick={handleClick}
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
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="#">Nome</label>
          <Input
            type="text"
            placeholder="Nome..."
            error={errors.nome}
            register={register("nome")}
          />
          <label htmlFor="#">Email</label>
          <Input
            type="email"
            placeholder="Email..."
            error={errors.email}
            register={register("email")}
          />
          <label htmlFor="#">Senha</label>
          <Input
            type="password"
            error={errors.password}
            placeholder="Informe sua senha..."
            register={register("password")}
          />
          <label htmlFor="#">Confirmar senha</label>
          <Input
            type="password"
            error={errors.passwordConfirmation}
            placeholder="Confirme sua senha..."
            register={register("passwordConfirmation")}
          />
          <label htmlFor="#">Selecionar mósulo</label>
          <Input type="select" register={register("modulo")}>
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
