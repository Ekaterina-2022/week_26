import React from "react";
import styles from "./footer_style.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer_style}>
                <div className={styles.footer__author}><a href="http://" target="_blank" rel="noopener noreferrer">Author</a></div>
                <p className={styles.footer__year}>2023</p>
                <nav className={styles.footer__navigation}>
                    <ul className={styles.nav__bar}>
                        <li>Flashcards</li>
                        <li>List of French words</li>
                        <li>Vocabulary</li>
                    </ul>
                </nav>
            </footer>
        )
    }
}


export default Footer;