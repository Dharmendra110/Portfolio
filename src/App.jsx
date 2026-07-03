import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
// import Resume from "./components/Resume";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Education />
      {/* <Resume /> */}
      <Contact />
    </div>
  );
}

export default App;
