import React, { useState, useEffect } from "react";
import styles from "./card.css"


export default function Card(props) {
    const [translateButton, setShownButton] = useState(true);
    useEffect(() => setShownButton(true), [props.translation]);


    return (
        <div className={styles.card}>
                <div className={styles.card__word}>
                    <h2>{props.word}</h2>
                    <div>{props.transcrip}</div>   
                </div>
                <div className={styles.card__translation}>
                    {translateButton ? (<button className={styles.check_btn} onClick={() => setShownButton(!translateButton)}>Check yourself</button>) : (<h3  onDoubleClick={() => setShownButton(!translateButton)}>{props.translation}</h3>)}
                    
                    <div>{props.theme}</div>
                </div>
            </div>
    )
}

