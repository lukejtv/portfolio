import "./App.css";
import About from "./components/About";
import Design from "./components/Design"
import Audio from "./components/Audio"
import Contact from "./components/Contact"
import Film from "./components/Film"

const App = () => {
  return (
    <div className="app">
      <About/>
      <Design/>
      <Film/>
      <Audio/>
      <Contact/>
    </div>
  );
};

export default App;


