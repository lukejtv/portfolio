import ReactPlayer from "react-player";
import SignatureAnimation from "./assets/signature.mp4";
import { motion } from "framer-motion";

const Signature = () => {
  return (
    <motion.div animate={{ scale: 0.3 }} transition={{ delay: 2, duration: 2 }}>
      <ReactPlayer url={SignatureAnimation} playing={true} muted playsinline />
    </motion.div>
  );
};

export default Signature;
