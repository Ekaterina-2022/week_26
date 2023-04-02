import React from "react";
import "./themes_style.css";


class Theme extends React.Component {
    render() {
        const {name} = this.props;
        return (
          <>
    <li className="themes__list_item"><a>{name}</a></li>
    </>
    )
}
}


export default Theme;