import styled from "styled-components";
import { css } from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `};
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `};
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `};
  max-width: ${({ maxWidth }) => maxWidth || `297px`};
  justify-content: ${({ justifyContent }) => justifyContent || `space-between`};
  align-items: ${({ alignItems }) => alignItems || `center`};
`;

export default Box;
