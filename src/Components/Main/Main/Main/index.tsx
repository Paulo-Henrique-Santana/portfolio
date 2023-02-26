import About from "../../Sections/About";
import Contact from "../../Sections/Contact";
import Home from "../../Sections/Home/Home";
import Projects from "../../Sections/Projects";
import Skills from "../../Sections/Skills";
import SocialMedia from "../../SocialMedia";

const Main = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <SocialMedia />
      <Contact />
    </main>
  );
};

export default Main;
