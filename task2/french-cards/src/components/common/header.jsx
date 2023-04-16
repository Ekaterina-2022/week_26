import React from "react";
import styles from "./header_style.css";
import "./header_logo.svg";
import  { Link, NavLink } from "react-router-dom";



class Header extends React.Component {
    render() {
        return (
            <header className={styles.header_style}>
                <div className={styles.logo}>
                    <a className={styles.a}><i className="fa-brands fa-leanpub"></i></a>  
                </div>
                <nav className={styles.header__navigation}>
                    <ul className={styles.nav__bar}>
                        <li><NavLink to="/">Flashcards</NavLink></li>
                        <li><Link to="/table">List of French words</Link></li>
                        <li>Vocabulary</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Header;