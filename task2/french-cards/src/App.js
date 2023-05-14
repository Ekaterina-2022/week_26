import styles from "./App.css";
import "./components/themes/themes_style.css";
import themes from "./components/themes/themes_list.js";
import Card from "./components/card/card";
import Theme from "./components/themes/themes.jsx";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { Routes, Route, Link } from "react-router-dom";
import Table from "./components/pages/table/table";
import words from "./components/pages/words_list";
import CardSlider from "./components/pages/slider/cards-slider";
import PageNotFound from "./components/common/pageNotFound";

function App() {
	return (
		<div className={styles.app}>
			<Header />

			<h1>Decks in French</h1>
			<section className={styles.main__welcome}>
				<ul className={styles.choose__sections}>
					<li className={styles.choose__sections_item}>
						<Link to="/game">Learn words by Themes</Link>
					</li>
					<li className={styles.choose__sections_item}>
						<Link to="/table">See all of the words</Link>
					</li>
					<li className={styles.choose__sections_item}>
						<a>Vocabulary/ Le dictionnaire</a>
					</li>
				</ul>
			</section>

			<Routes>
				<Route exact path="/home" />
				<Route exact path="/game" element={<CardSlider {...words} />} />
				<Route exact path="/table" element={<Table />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
