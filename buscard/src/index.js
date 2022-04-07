import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faEnvelopesBulk,
	faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import { fab, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

import reportWebVitals from "./reportWebVitals";

library.add(fab, faEnvelopeSquare, faEnvelope, faEnvelopesBulk, faLinkedinIn);

function Card() {
	return (
		<div className="container">
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	);
}

ReactDOM.render(<Card />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
