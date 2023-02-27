import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import Home from "./pages/Home/Home";

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
      <Home toggleTheme={toggleTheme} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/email-sucess" element={<EmailSucess />} />
        </Routes>
      </BrowserRouter> */}
    </ThemeProvider>
  );
};

export default App;
