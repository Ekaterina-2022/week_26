import logo from "./logo.svg";
import "./App.css";
import "./components/themes/themes_style.css";
import themes from "./components/themes/themes.js";
import Card from "./components/card";
import Theme from "./components/themes/themes.jsx";
import Header from "./components/common/header";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<h1>Decks in French</h1>
			<section className="main__welcome">
				<ul className="choose__sections">
					<li className="choose__sections_item">
						<a>Learn words by Themes</a>
					</li>
					<li className="choose__sections_item">
						<a>See all of the words</a>
					</li>
					<li className="choose__sections_item">
						<a>Vocabulary/ Le dictionnaire</a>
					</li>
				</ul>
			</section>
			<section>
				<div className="cards__theme">
					<ul className="themes__list">
						{themes.map((e) => (
							<Theme name={e.name} />
						))}
					</ul>
				</div>
			</section>
		</div>
	);
}

export default App;
