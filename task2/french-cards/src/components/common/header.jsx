import React from "react";
import "./header_style.css";
import "./header_logo.svg";


class Header extends React.Component {
    render() {
        return (
            <header className="header_style">
                <div className="logo">
                    <a></a>  
                </div>
                <nav className="header__navigation">
                    <ul>
                        <li>Flashcards</li>
                        <li>List of French words</li>
                        <li>Vocabulary</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Header;