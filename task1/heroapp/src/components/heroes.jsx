import React from "react";
import "./heroes.css"

class Hero extends React.Component {
    render() {
        const {name, imgUrl, features, descrip} = this.props;
        return (
            <div className="hero">
    <h2>{name}</h2>
    <div><img src={imgUrl}/></div>
    <div>Силы: {features}</div>
    <div>Подробнее: {descrip}</div>
    </div>
        )
    }
}


export default Hero;