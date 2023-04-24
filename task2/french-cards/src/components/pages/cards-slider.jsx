import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import styles from "./cards-slider.css";
import Card from "../card/card";
import words from "../pages/words_list";
import Arrows from "./arrows";

export const SliderContext = createContext();

export default function CardSlider ({ width, height, autoPlay, autoPlayTime }) {
  const [arr, setArr] = useState(words);
    const [items, setItems] = useState([]);
    const [slide, setSlide] = useState(0);
    const [animation, setAnimation] = useState(true);

    const changeSlide = (direction = 1) => {
        setAnimation(false);
        let slideNumber = 0;
    
        if (slide + direction < 0) {
          slideNumber = items.length - 1;
        } else {
          slideNumber = (slide + direction) % items.length;
        }
    
        setSlide(slideNumber);
    
        const timeout = setTimeout(() => {
          setAnimation(true);
        }, 0);
    
        return () => {
          clearTimeout(timeout)
        }
      };
      const goToSlide = (number) => {
        setAnimation(false);
        setSlide(number % items.length);
    
        const timeout = setTimeout(() => {
          setAnimation(true);
        }, 0);
    
        return () => {
          clearTimeout(timeout)
        }
      };
    
      useEffect(() => {
        if (!autoPlay) return;
    
        const interval = setInterval(() => {
          changeSlide(1);
        }, autoPlayTime);
    
        return () => {
          clearInterval(interval);
        };
      }, [items.length, slide]);



return (
<div style={{ width, height }} className="slider">
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
        }}
      >
        <Arrows />
        {
          arr.length ? (
            <Card data={items[slide]} animation={animation} />
          ) : null
        }
      </SliderContext.Provider>
    </div>
  );
};

   /* <button>back</button>
    {words.map((word) => (
        <Card
            key={word.id}
            word={word.word}
            transcrip={word.transcription}
            translation={word.translation}
            theme={word.theme}
        />
    ))}
    <button>next</button>
)*/
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