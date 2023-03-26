import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/heroes.css";
import Hero from "./components/heroes";

const heroesStorage = [
	{
		name: "Бэтмен",
		imgUrl: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
		features:
			"интеллект, обширные познания, знания боевых искусств, ловкость",
		descrip:
			"по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций.",
	},
	{
		name: "Супермен",
		imgUrl: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
		features:
			"непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
		descrip:
			"полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты.",
	},
	{
		name: "Железный человек",
		imgUrl: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
		features:
			"высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
		descrip:
			"пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже.",
	},
];

class App extends React.Component {
	render() {
		return (
			<div className="container">
				{heroesStorage.map((hero) => (
					<Hero
						name={hero.name}
						imgUrl={hero.imgUrl}
						features={hero.features}
						descrip={hero.descrip}
					/>
				))}
			</div>
		);
	}
}

export default App;
