import React, { useState, useEffect, useRef,
    forwardRef } from "react";
import styles from "./card.css"


const Card = forwardRef(function Card (props, ref) {
    const [translateButton, setShownButton] = useState(true);
   const handlesprops = props.addLearntWords;

    useEffect(() => setShownButton(true), [props.translation]);

    const handles = () => {
    setShownButton(!translateButton);
    handlesprops();
}

    return (
        <div className={styles.card}>
                <div className={styles.card__word}>
                    <h2>{props.word}</h2>
                    <div>{props.transcription}</div>   
                </div>
                <div className={styles.card__translation}>
                    {translateButton ? (<button className={styles.check_btn} onClick={handles} ref={ref}>Check yourself</button>) : (<h3  onDoubleClick={() => setShownButton(!translateButton)}>{props.translation}</h3>)}
                    
                    <div>{props.theme}</div>
                </div>
            </div>
    )
})
export default Card
