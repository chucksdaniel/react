import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<div className="footer-item card">
			<h4>Let's Hook up </h4>
			<div className="social-handles">
				<a href="https://twitter.com/iamchucksdaniel" target="_blank">
					<FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
				</a>
				<a
					href="https://web.facebook.com/iamdanielchukwuma"
					target="_blank"
				>
					<FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
				</a>
				<a
					href="https://www.instagram.com/iamchucksdaniel/"
					target="_blank"
				>
					<FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
				</a>
				<a href="https://github.com/chucksdaniel" target="_blank">
					<FontAwesomeIcon icon={["fab", "github"]} size="2x" />
				</a>
			</div>
		</div>
	);
}
