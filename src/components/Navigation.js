import { motion } from "framer-motion";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <motion.div
        className="buttonList"
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
      >
        <button onClick={props.designScroll} className="button">
          Design.
        </button>
        <button onClick={props.filmScroll} className="button">
          Film.
        </button>
        <button onClick={props.audioScroll} className="button">
          Audio.
        </button>
        <button onClick={props.contactScroll} className="button">
          Contact.
        </button>
        <div className='FAB-container'>
          <button className='FAB' onClick={props.aboutScroll}>^</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navigation;
