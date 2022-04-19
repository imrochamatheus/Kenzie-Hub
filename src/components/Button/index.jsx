import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  max-width: ${(props) => props.max || "100%"};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  height: 38.5px;
  padding: 0px, 22px, 0px, 22px;
  border-radius: 5px;
`;

export default Button;
