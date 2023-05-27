import React, { useState, useEffect, createContext, useRef,
  forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./cards-slider.css";
import s from "../../themes/themes_style.css";
import Card from "../../card/card";
import words from "../../pages/words_list";
import Arrows from "../arrows";
import themes from "../../themes/themes_list.js";
import Theme from "../../themes/themes.jsx";

export const SliderContext = createContext();

export default function CardSlider (props) {
 
  const [arr, setArr] = useState(words);
    const [items, setItems] = useState(words);
    const [slide, setSlide] = useState(0);
    const [animation, setAnimation] = useState(true);
    const [index, setIndex] = useState(0);
    const [itemsLearnt, setItemsLearnt] = useState(0);
const word = props[index];

const ref = useRef();
 
useEffect(() => ref.current.focus());   // in componentDidMount()

const nextSlide = () => {
  setIndex(index === arr.length - 1 ? 0 : index + 1)
}

const prevSlide = () => {
  setIndex(index === 0 ? arr.length - 1 : index - 1)
}

const addLearntWords = () => {
  setItemsLearnt(itemsLearnt + 1)
}
    



return (
  <>
  <section className={s.section__themes}>
				<div className={s.cards__theme}>
					<ul className={s.themes__list}>
						{themes.map((e) => (
							<Theme key={e.id} name={e.name} />
						))}
					</ul>
				</div>
			</section>
  <div className="slider">

      <SliderContext.Provider
      >
        {   
            <Card data={items[slide]} animation={animation} addLearntWords={addLearntWords} ref={ref} key={index} {...word}/>
         
        }
        <Arrows nextSlide={nextSlide} prevSlide={prevSlide}/>
        <div>Already learnt {itemsLearnt} </div>
      </SliderContext.Provider>
    </div></>

  );
};

CardSlider.propTypes = {
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string
  };
  
CardSlider.defaultProps = {
    autoPlay: false,
    autoPlayTime: 5000,
    width: "100%",
    height: "100%"
  };