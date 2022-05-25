import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Design from "./components/Design";
import Audio from "./components/Audio";
import Contact from "./components/Contact";
import Film from "./components/Film";
import Navigation from "./components/Navigation";

const App = () => {
  const designSection = useRef(null);
  const filmSection = useRef(null);
  const audioSection = useRef(null);
  const contactSection = useRef(null);

  const goToDesignSection = () => {
    window.scrollTo({
      top: designSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const goToFilmSection = () => {
    window.scrollTo({ top: filmSection.current.offsetTop, behavior: "smooth" });
  };

  const goToAudioSection = () => {
    window.scrollTo({
      top: audioSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const goToContactSection = () => {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <Navigation
        designScroll={goToDesignSection}
        filmScroll={goToFilmSection}
        audioScroll={goToAudioSection}
        contactScroll={goToContactSection}
      />
      <About/>
      <Design innerRef={designSection} />
      <Film innerRef={filmSection}/>
      <Audio innerRef={audioSection} />
      <Contact innerRef={contactSection} />
    </div>
  );
};

export default App;
