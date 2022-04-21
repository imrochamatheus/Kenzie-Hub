import { css } from "styled-components";
import styled from "styled-components";

const Text = styled.p`
  ${({ size }) =>
    size &&
    css`
      font-size: ${size}px;
    `};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${({ weight }) =>
    weight &&
    css`
      weight: ${weight};
    `};

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `};
`;

export default Text;
