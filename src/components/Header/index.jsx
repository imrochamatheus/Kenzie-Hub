import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  display: flex;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : `297px`)};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : `space-between`};
`;

export default Header;
