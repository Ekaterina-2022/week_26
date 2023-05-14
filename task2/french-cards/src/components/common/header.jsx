import React from "react";
import styles from "./header_style.css";
import "./header_logo.svg";
import  { Link } from "react-router-dom";



class Header extends React.Component {
    render() {
        return (
            <header className={styles.header_style}>
                <div className={styles.logo}>
                <p className={styles.a}>
                    <Link to="/home"><i className="fa-brands fa-leanpub"></i></Link></p> 
                </div>
                <nav className={styles.header__navigation}>
                    <ul className={styles.nav__bar}>
                        <li><Link to="/game">Flashcards</Link></li>
                        <li><Link to="/table">List of French words</Link></li>
                        <li>Vocabulary</li>
                        <li><Link to="/home">Home</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Header;