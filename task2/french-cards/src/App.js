import styles from "./App.css";
import "./components/themes/themes_style.css";
import themes from "./components/themes/themes_list.js";
import Card from "./components/card/card";
import Theme from "./components/themes/themes.jsx";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/pages/table";
import words from "./components/pages/words_list";
import CardSlider from "./components/pages/cards-slider";

function App() {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Header></Header>

				<h1>Decks in French</h1>
				<section className={styles.main__welcome}>
					<ul className={styles.choose__sections}>
						<li className={styles.choose__sections_item}>
							<a>Learn words by Themes</a>
						</li>
						<li className={styles.choose__sections_item}>
							<a>See all of the words</a>
						</li>
						<li className={styles.choose__sections_item}>
							<a>Vocabulary/ Le dictionnaire</a>
						</li>
					</ul>
				</section>
				<section className={styles.section__themes}>
					<div className={styles.cards__theme}>
						<ul className={styles.themes__list}>
							{themes.map((e) => (
								<Theme key={e.id} name={e.name} />
							))}
						</ul>
					</div>
				</section>
				<section>
					<CardSlider />
				</section>

				<Table></Table>
				<Footer></Footer>
				<Routes>
					<Route exact path="/table" component={<Table></Table>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
