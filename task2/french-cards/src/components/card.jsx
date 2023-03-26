import React from "react";
import "./card.css"


class Card extends React.Component {
    render() {
        const {word, transcrip, translation, theme} = this.props;
        return (
            <div className="card">
                <div className="card__word">
                    <h2>{word}</h2>
                    <div>{transcrip}</div>   
                </div>
                <div className="card__translation">
                    <div>{translation}</div>
                    <div>{theme}</div>
                </div>
            </div>
        )
    }
}


export default Card;