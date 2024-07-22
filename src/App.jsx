import AboutMe from "./components/AboutMe/AboutMe";
import Courses from "./components/Courses/Courses";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Projects />
        <Education />
        <Courses />
        <Skills />
        <Experience />
        <AboutMe />
      </Main>
    </>
  );
}

export default App;
