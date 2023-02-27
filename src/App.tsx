import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Thanks from "./pages/Thanks";

const App = () => {
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
