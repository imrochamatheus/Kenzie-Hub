import styled from "styled-components";
import { css } from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `};
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `};
  ${({ bg }) =>
    bg &&
    css`
      background: ${bg};
    `};
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius};
    `};
  max-width: ${({ maxWidth }) => maxWidth || `297px`};
  justify-content: ${({ justifyContent }) => justifyContent || `space-between`};
  align-items: ${({ alignItems }) => alignItems || `center`};
`;

export default Box;
