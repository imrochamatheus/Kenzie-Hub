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

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12.18px;
    background-color: #121214;

    &:hover {
      background-color: #343b41;
    }
  }
`;

export default Box;
