import styled from "styled-components";
import { css } from "styled-components";

const style = css`
  width: 100%;
  height: 38.5px;
  color: white;
  outline: none;
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  line-height: 21px;
  border-radius: 4px;
  letter-spacing: 0em;
  background: #343b41;
  box-sizing: border-box;
  border: 1px solid white;
  padding: 0px 16px 0px 16px;
  border: ${({ border }) => (border ? `1px solid ${border};` : "none")};
`;

const StyledInput = styled.input`
  ${style}
`;

const StyledSelect = styled.select`
  ${style}
`;

export { StyledInput, StyledSelect };
