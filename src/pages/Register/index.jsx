import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../../components/Form";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Box from "../../components/Box";
import DefaultButton from "../../components/DefaultButton";

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
    <Box
      direction="column"
      gap="15.07px"
      padding="15px 0"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", margin: "0 auto", color: "#FFF" }}
    >
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
        <Box direction="column" gap="22px">
          <Text size="14.44" align="center" weight="700">
            Crie sua conta
          </Text>
          <Text size="12" color="#868E96">
            Rápido e grátis, vamos nessa
          </Text>
        </Box>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Nome..."
            error={errors.nome}
            register={register("nome")}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Email..."
            error={errors.email}
            register={register("email")}
          />
          <Input
            label="Senha"
            type="password"
            error={errors.password}
            placeholder="Informe sua senha..."
            register={register("password")}
          />
          <Input
            label="Confirmação de senha"
            type="password"
            error={errors.passwordConfirmation}
            placeholder="Confirme sua senha..."
            register={register("passwordConfirmation")}
          />
          <Input
            type="select"
            register={register("modulo")}
            label="Selecionar módulo"
          >
            {Array.from(Array(6)).map((_, i) => (
              <option key={i} value={`Módulo ${i + 1}`}>{`Módulo ${
                i + 1
              }`}</option>
            ))}
          </Input>
          <DefaultButton background="#59323F" color="#FFF">
            Cadastrar
          </DefaultButton>
        </Form>
      </Box>
    </Box>
  );
};

export default Register;
