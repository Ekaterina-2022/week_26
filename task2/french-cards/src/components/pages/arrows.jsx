import React from "react";
import { SliderContext } from "./slider/cards-slider";

import styles from "./arrows.css";

export default function Arrows({nextSlide, prevSlide}) {
  
  return (
    <div className={styles.arrows}>
      <div onClick={() => nextSlide()} className={styles.btn_back}><span>next</span></div>
      <div onClick={() => prevSlide()} className={styles.btn_back}><span>back</span></div>
    </div>
  );
}