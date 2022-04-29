import React from "react";
import Photo from "../images/photo-grid.png";

export default function Hero() {
	return (
		<section className="hero">
			<div>
				<img src={Photo} className="hero--photo" />
			</div>
			<div>
				<h1 className="hero--heading">Online Experience</h1>
				<p className="hero--title">
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</section>
	);
}
