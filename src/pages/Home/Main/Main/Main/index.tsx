import About from "../../Sections/About";
import Contact from "../../Sections/Contact";
import Experience from "../../Sections/Experience";
import Home from "../../Sections/Home/Home";
import Projects from "../../Sections/Projects";
import Skills from "../../Sections/Skills";

const Main = () => {
  return (
    <main>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
