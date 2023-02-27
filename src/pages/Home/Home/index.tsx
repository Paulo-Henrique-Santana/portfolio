import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main/Main";
import NavMobile from "..//NavMobile";

interface Props {
  toggleTheme: () => void;
}

const Home = ({ toggleTheme }: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <Header
        toggleTheme={toggleTheme}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <Main />
      <NavMobile active={mobileMenu} setActive={setMobileMenu} />
    </>
  );
};

export default Home;
