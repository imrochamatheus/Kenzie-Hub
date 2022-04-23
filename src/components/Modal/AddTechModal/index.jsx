import Box from "../../Box";
import Text from "../../Text";
import Modal from "react-modal";
import Input from "../../Input";
import Form from "../../Form";
import customStyles from "./styles";
import DefaultButton from "../../DefaultButton";

Modal.setAppElement("#root");

const AddTechModal = ({ modalIsOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
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
        <DefaultButton background="inherit" maxWidth="20px">
          <Text size="16">X</Text>
        </DefaultButton>
      </Box>
      <Box
        maxWidth="100%"
        justify="center"
        style={{ paddingTop: "10px", color: "#FFF" }}
      >
        <Form>
          <Input
            label="Nome"
            type="text"
            border="#FFF"
            placeholder="Nome da tecnologia..."
          />
          <Input
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
            <option key={3} value="avancado">
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
    </Modal>
  );
};

export default AddTechModal;
