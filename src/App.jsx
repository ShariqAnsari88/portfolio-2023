import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <HeroBanner />
            <AboutMe />
            <Skills />
            <Testimonials />
            <Contact />
        </div>
    );
}

export default App;
