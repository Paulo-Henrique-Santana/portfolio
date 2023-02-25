import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import About from "./Components/Main/Sections/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Main/Sections/Home/Home";
import NavMobile from "./Components/NavMobile";
import Skills from "./Components/Main/Sections/Skills";
import SocialMedia from "./Components/Main/SocialMedia";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import Main from "./Components/Main/Main";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (typeof theme === "string") localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Header
        toggleTheme={toggleTheme}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <Main />
      <NavMobile active={mobileMenu} setActive={setMobileMenu} />
    </ThemeProvider>
  );
};

export default App;
