import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import About from "./Components/Sections/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Sections/Home/Home";
import NavMobile from "./Components/NavMobile";
import Skills from "./Components/Sections/Skills";
import SocialMedia from "./Components/SocialMedia";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const [mobileMenu, setMobileMenu] = useState(false);

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
      <Home />
      <About />
      <Skills />
      <SocialMedia />
      <NavMobile active={mobileMenu} setActive={setMobileMenu} />
    </ThemeProvider>
  );
};

export default App;
