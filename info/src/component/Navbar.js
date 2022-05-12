import React from "react";
import Logo from "../image/logo192.png";

export default function Header() {
	return (
		<nav>
			<img src={Logo} />
			<h3>ReactFacts</h3>
			<h4>React Course - Project 1</h4>
		</nav>
	);
}
