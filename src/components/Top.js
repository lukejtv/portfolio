import React from "react";
import "../App.css";
import Signature from "./Signature";
import Arrow from "./Arrow";
import { motion } from "framer-motion";

const Top = () => {
  return (
    <div className="top">
        <Signature/>
        <Arrow/>
    </div>
  );
};

export default Top;
