import React from "react";
import styles from "./card.css"


class Card extends React.Component {
    render() {
        const {word, transcrip, translation, theme} = this.props;
        return (
            <div className={styles.card}>
                <div className={styles.card__word}>
                    <h2>{word}</h2>
                    <div>{transcrip}</div>   
                </div>
                <div className={styles.card__translation}>
                    <div>{translation}</div>
                    <div>{theme}</div>
                </div>
            </div>
        )
    }
}


export default Card;