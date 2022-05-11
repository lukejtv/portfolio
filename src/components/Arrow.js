import React from 'react'
import { motion } from 'framer-motion'
import { IoIosArrowDown } from "react-icons/io";

const Arrow = () => {
  return (
    <motion.div animate={{y:20}} transition={{duration: 0.8, yoyo: Infinity}}>
        <motion.div className="arrow" animate={{opacity: 1}} transition={{delay: 8.5}}>
            <h1><IoIosArrowDown/></h1>
        </motion.div>
    </motion.div>
    
  );
};

export default Arrow;