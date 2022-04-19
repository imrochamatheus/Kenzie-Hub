import styled from "styled-components";

const StyledFieldSet = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  gap: 17.92px;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.colors.secondary.grey0};
    font-size: ${({ theme }) => theme.typography.label};
  }

  input {
    background-color: ${(props) => props.background};
    height: 38.5px;
    border-radius: 5px;
    border-color: white;
  }
`;

export default StyledFieldSet;
