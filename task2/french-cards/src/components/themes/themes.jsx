import React from "react";
import styles from "./themes_style.css";


class Theme extends React.Component {
    render() {
        const {name} = this.props;
        return (
          <>
    <li className={styles.themes__list_item}><a>{name}</a></li>
    </>
    )
}
}


export default Theme;