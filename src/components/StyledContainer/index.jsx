import styled from "styled-components";

const StyledContainer = styled.main`
  display: flex;
  width: 100%;
  color: white;
  gap: 15.07px;
  box-sizing: border-box;

  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h3 {
    text-align: center;
    font-size: 14.44px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
  }

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
  }

  label {
    font-size: 10px;
    font-weight: 400;
  }
`;

export default StyledContainer;
