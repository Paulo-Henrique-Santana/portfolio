import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NavMobile from "./Components/NavMobile";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const App = () => {
  const [theme, setTheme] = useState(dark);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        toggleTheme={toggleTheme}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <Home />
      <NavMobile active={mobileMenu} />
    </ThemeProvider>
  );
};

export default App;
