import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
	return (
		<div className="bio-info">
			<div>
				<div className="profile">
					<img
						src="../images/Profile2.jpg"
						width="40px"
						className="pro-pic"
					/>
				</div>

				<div className="bio">
					<h3 className="name">Chukwuma Daniel</h3>
					<h5 className="post">Full Stack Developer</h5>
					<p className="mail">iamchukwumadaniel.com</p>
				</div>
				<div className="social">
					<a href="mailto:iamdanielchukwuma@gmail.com">
						<button className="social-mail">
							<FontAwesomeIcon icon="envelopes-bulk" size="lg" /> Email
						</button>
					</a>
					<a
						href="https://www.linkedin.com/in/iamdanielchukwuma/"
						target="_blank"
					>
						<button className="social-li">
							{" "}
							<FontAwesomeIcon
								icon={["fab", "linkedin"]}
								className="linkedin-icon"
							/>{" "}
							Linkedin{" "}
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
