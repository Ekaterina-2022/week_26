import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";

function App() {
	return (
		<div className="App">
			<h1>Decks in French</h1>
			<div className="cards__theme">
				<ul>
					<li>
						<a>GREETINGS & SALUTATIONS</a>
					</li>
					<li>
						<a>PEOPLE</a>
					</li>
					<li>
						<a>DAYS & TIME</a>
					</li>
					<li>
						<a>FOOD, DRINKS & ENTERTAINMENT</a>
					</li>
					<li>
						<a>BASIC CONVERSATION</a>
					</li>
					<li>
						<a>FRENCH PRONUNCIATION</a>
					</li>
					<li>
						<a>ANIMALS</a>
					</li>
					<li>
						<a>BASIC GRAMMAR WORDS</a>
					</li>
					<li>
						<a>MISCELLANEOUS PHRASES</a>
					</li>
					<li>
						<a>EMOTIONS AND FEELINGS </a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
