import ReactPlayer from "react-player";
import SignatureAnimation from "../assets/signature.mp4";
import { motion } from "framer-motion";
import "../App.css"

const Signature = () => {
  return (
    <motion.div className="signature" animate={{y: -200,}} transition={{delay: 3, duration: 2,}}>
      <motion.div animate={{ scale: 0.5 }} transition={{ delay: 2, duration: 2 }}>
        <ReactPlayer url={SignatureAnimation} playing={true} muted playsinline />
      </motion.div>
    </motion.div>
  );
};

export default Signature;
