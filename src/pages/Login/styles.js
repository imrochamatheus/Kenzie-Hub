import styled from "styled-components";

const StyledLogin = styled.main`
  display: flex;
  width: 100%;
  color: white;
  gap: 37.07px;
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

  div {
    width: 100%;
    gap: 27.27px;
    display: flex;
    max-width: 296px;
    background: #212529;
    flex-direction: column;
    box-sizing: border-box;
    padding: 29px 18px 40px 18px;
    border-radius: 3.20867px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
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

export default StyledLogin;
