import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Box from "../../Box";
import Text from "../../Text";
import Modal from "react-modal";
import Input from "../../Input";
import Form from "../../Form";
import customStyles from "./styles";
import instance from "../../../axios";
import DefaultButton from "../../DefaultButton";

Modal.setAppElement("#root");

const AddTechModal = ({ modalIsOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const schema = yup.object().shape({
    title: yup.string().required("O campo nome não deve permanecer vazio!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data, e) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const addTech = instance.post("users/techs", data);

    toast.promise(addTech, {
      pending: "Aguarde...",
      success: {
        render() {
          instance.defaults.headers.common["Authorization"] = null;

          reset({
            title: "",
            status: "iniciante",
          });

          closeModal();
          return "Nova tecnologia adicionada com sucesso!";
        },
      },
      error: {
        render({
          data: {
            response: {
              data: { message },
            },
          },
        }) {
          instance.defaults.headers.common["Authorization"] = null;
          return message;
        },
      },
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Box bg="#343B41" maxWidth="100%" style={{ padding: "14px 20px" }}>
        <Text size="16" color="#FFF" weight="bold">
          Cadastrar Tecnologia
        </Text>
        <DefaultButton
          background="inherit"
          maxWidth="16px"
          padding="0"
          onClick={closeModal}
        >
          <Text size="16" color="#868E96">
            X
          </Text>
        </DefaultButton>
      </Box>
      <Box
        maxWidth="100%"
        justify="center"
        style={{ paddingTop: "10px", color: "#FFF" }}
      >
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Nome"
            type="text"
            border="#FFF"
            register={register("title")}
            error={errors.title}
            placeholder="Nome da tecnologia..."
          />
          <Input
            register={register("status")}
            label="Selecionar status"
            type="select"
            border="#FFF"
            placeholder="Selecione um nível"
          >
            <option key={1} value="iniciante">
              Iniciante
            </option>
            <option key={2} value="intermediário">
              Intermediário
            </option>
            <option key={3} value="Avançado">
              Avançado
            </option>
          </Input>
          <DefaultButton background="#FF577F" maxWidth="297px" padding="22px">
            <Text size="16" weight="bold" color="#FFF">
              Cadastrar tecnologia
            </Text>
          </DefaultButton>
        </Form>
      </Box>
      <ToastContainer />
    </Modal>
  );
};

export default AddTechModal;
