import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

import "./App.css";

function App() {
	console.log(data);
	const cardData = data.map((item) => {
		return (
			<Card
				key={item.id}
				item={item}
				// img={item.coverImg}
				// rating={item.stats.rating}
				// reviewCount={item.stats.reviewCount}
				// location={item.location}
				// title={item.title}
				// price={item.price}
				// openSpots={item.openSpots}
			/>
		);
	});

	return (
		<div className="App">
			<Navbar />
			<Hero />
			{/* <Card /> */}
			<section className="cards-list">{cardData}</section>
		</div>
	);
}

export default App;
