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
import instance from "../../axios";

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
    instance
      .post("/sessions", formData)
      .then((response) => {
        const {
          token,
          user: { name, id, course_module },
        } = response.data;

        localStorage.setItem(
          "userData",
          JSON.stringify({ token, name, id, course_module })
        );
        navigate("/home", { replace: true });
      })
      .catch(({ response: { data: error } }) => toast.error(error.message));
  };

  return (
    <Box
      direction="column"
      gap="15.07px"
      padding="15px 0"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", margin: "0 auto", color: "#FFF" }}
    >
      <Box justifyContent="center">
        <img alt="kenzieHub logo" src="./logo.svg" />
      </Box>
      <Box
        radius="3.20867px"
        gap="27.27px"
        bg="#212529"
        direction="column"
        style={{
          padding: "29px 18px 40px 18px",
          boxShadow: "0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25)",
        }}
      >
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
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Login;
