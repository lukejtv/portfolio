import "./App.css";
import Signature from "./Signature";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="App">
      <motion.div
        className="signature"
        animate={{
          y: -360,
        }}
        transition={{
          delay: 3,
          duration: 2,
        }}
      >
        <Signature />
      </motion.div>
    </div>
  );
};

export default App;
