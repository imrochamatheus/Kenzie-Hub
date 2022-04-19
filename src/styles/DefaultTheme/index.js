import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      main: "#FF577F",
      focus: "#FF427F",
      negative: "#59323F",
    },
    secondary: {
      grey4: "#121214",
      grey3: "#212529",
      grey2: "#343B41",
      grey1: "#868E96",
      grey0: "#F8F9FA",
    },
    feedback: {
      success: "#3FE864",
      negative: "#E83F5B",
    },
  },
  typography: {
    label: "9.79px",
    h: "12px",
  },
};

const DefaultTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DefaultTheme;
