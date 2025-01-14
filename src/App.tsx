import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Weather from "./components/Weather";

const theme = {
  colors: {
    lightGray: "#f2f2f2",
    darkGray: "#48484a",
    orange: "#EB6E4B",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Weather></Weather>
    </ThemeProvider>
  );
}

export default App;
