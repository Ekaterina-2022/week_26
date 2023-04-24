import React, { useContext } from "react";
import { SliderContext } from "./cards-slider";

import styles from "./arrows.css";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className={styles.arrows}>
      <div className={styles.arrows + " " + styles.arrow + " " + styles.left} onClick={() => changeSlide(-1)} />
      <div className={styles.arrows + " " + styles.arrow + " " + styles.right} onClick={() => changeSlide(1)} />
    </div>
  );
}