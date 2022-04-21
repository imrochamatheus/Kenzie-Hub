import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Box from "../../components/Box";
import DefaultButton from "../../components/DefaultButton";
import MainContainer from "../../components/MainContainer";
import FormContainer from "../../components/FormContainer";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido!")
    .required("O campo email é obrigatório!"),
  password: yup.string().required("O campo senha é obrigatório!"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const handleClick = () => navigate("/register", { replace: true });

  const onSubmitFunction = (formData) => {
    console.log(formData);
  };

  return (
    <MainContainer>
      <Box justifyContent="center">
        <img alt="kenzieHub logo" src="./logo.svg" />
      </Box>
      <FormContainer>
        <h3>Login</h3>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="#">Email</label>
          <Input
            type="email"
            border="#FFF"
            placeholder="Email..."
            register={register("email")}
            error={errors.email}
          />
          <label htmlFor="#">Senha</label>
          <Input
            type="password"
            border="#FFF"
            register={register("password")}
            error={errors.password}
            placeholder="Informe sua senha..."
          />
          <DefaultButton background="#FF577F" color="#FFF">
            Entrar
          </DefaultButton>
        </Form>
        <Text size="9.63" color="#868E96" align="center">
          Ainda não possui uma conta?
        </Text>
        <DefaultButton background="#868E96" color="#FFF" onClick={handleClick}>
          Cadastre-se
        </DefaultButton>
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
