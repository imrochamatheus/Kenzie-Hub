import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Box from "../../components/Box";
import DefaultButton from "../../components/DefaultButton";
import MainContainer from "../../components/MainContainer";
import FormContainer from "../../components/FormContainer";

const req = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 1000,
  headers: { "Content-type": "application/json" },
});

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido!")
    .required("O campo email é obrigatório!"),
  password: yup
    .string()
    .min(6, "Sua senha precisa ter pelo menos 6 dígitos")
    .required("O campo senha é obrigatório!"),
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
    req
      .post("/sessions", formData)
      .then((response) => {
        const {
          token,
          user: { name },
        } = response.data;

        localStorage.setItem("userData", JSON.stringify({ token, name }));
      })
      .catch(({ response: { data: error } }) => toast.error(error.message));
  };

  return (
    <MainContainer>
      <Box justifyContent="center">
        <img alt="kenzieHub logo" src="./logo.svg" />
      </Box>
      <FormContainer>
        <Text size="14.44" align="center" weight="700">
          Login
        </Text>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type="email"
            border="#FFF"
            label="Email"
            placeholder="Email..."
            register={register("email")}
            error={errors.email}
          />
          <Input
            label="Senha"
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
      <ToastContainer />
    </MainContainer>
  );
};

export default Login;
