import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <AboutMe />
        <Skills />
      </Main>
    </>
  );
}

export default App;
