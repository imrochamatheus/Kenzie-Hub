import styled from "styled-components";

const DefaultButton = styled.button`
  height: 38.504066467285156px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  border: ${({ border }) => (border ? `1px solid ${border}` : "none")};
  padding: 0px, 22px, 0px, 22px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
`;

export default DefaultButton;
