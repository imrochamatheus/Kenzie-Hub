import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import instance from "../../axios";
import Box from "../../components/Box";
import Text from "../../components/Text";
import DefaultButton from "../../components/DefaultButton";
import AddTechModal from "../../components/Modal/AddTechModal";

const Home = () => {
  const navigate = useNavigate();

  const [userTechs, setUserTechs] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userData")).id;

    instance
      .get(`/users/${userId}`)
      .then((response) => setUserTechs(response.data.techs));
  }, [modalIsOpen]);

  const logout = () => {
    localStorage.clear();

    navigate("/", { replace: true });
  };

  return (
    <Box
      maxWidth="779.73px"
      direction="column"
      gap="15.07px"
      justifyContent="flex-start"
      alignItems="center"
      style={{
        minHeight: "100vh",
        margin: "0 auto",
        color: "#FFF",
        padding: "0 12px",
      }}
    >
      <Box
        maxWidth="100%"
        style={{ padding: "26px 0", borderBottom: "1px solid #212529" }}
      >
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
          onClick={logout}
        >
          Sair
        </DefaultButton>
      </Box>
      <Box
        maxWidth="100%"
        style={{ padding: "35.5px 0", borderBottom: "1px solid #212529" }}
      >
        <Text size="18" weight="700">
          Bem Vindo, {JSON.parse(localStorage.getItem("userData")).name}!
        </Text>

        <Text size="12" color="#868E96" align="center">
          Primeiro módulo (Introdução ao front-end)
        </Text>
      </Box>
      <Box maxWidth="100%">
        <Text>Tecnologias</Text>
        <DefaultButton
          maxWidth="32.49px"
          background="#212529"
          onClick={openModal}
        >
          <Text color="#FFF" size="24">
            +
          </Text>
        </DefaultButton>
      </Box>
      <Box
        bg="#212529"
        maxWidth="100%"
        style={{ padding: "18px 12px" }}
        radius="4px"
      >
        <ul>
          {userTechs &&
            userTechs.map((tech) => (
              <li key={tech.id}>
                <Text size="14.2">{tech.title}</Text>
                <Text color="#868E96" size="12.18">
                  {tech.status}
                </Text>
              </li>
            ))}
        </ul>
      </Box>
      <AddTechModal {...{ modalIsOpen, setIsOpen }} />
    </Box>
  );
};

export default Home;
