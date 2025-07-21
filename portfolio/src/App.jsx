import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-black min-h-screen font-outfit w-full " >
      <nav className="text-white flex flex-col md:flex-row py-4 px-6 md:px-12 gap-4 md:gap-28  bg-slate-900 items-center">
        <Nav />
      </nav>
      <main>
        <section className="flex flex-col md:flex-row items-center bg-black py-10 md:py-20 justify-center gap-10 md:gap-16 ">
          <Home/>
        </section>
        <section id="about" className=" py-8">
          <About/>
        </section>
        <section id="experience" className="py-10 px-2 md:px-36" >
          <Experience/>
        </section>
        <section id="projects" className="px-6 md:px-36 pt-2 pb-8">
          <Project/>
        </section>
        <section id="contact" className="px-6 md:px-36 py-8">
          <Contact/>
        </section>
      </main>
    </div>
  )
}

export default App
