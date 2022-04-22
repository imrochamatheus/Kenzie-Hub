import styled from "styled-components";

const DefaultButton = styled.button`
  width: 100%;
  height: ${({ height }) => height || "38.504066467285156px"};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${({ border }) => (border ? `1px solid ${border}` : "none")};
  padding: ${({ padding }) => padding || "0px 22px 0px 22px"};
  color: ${(props) => props.color};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  background-color: ${(props) => props.background};
`;

export default DefaultButton;
