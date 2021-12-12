import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";
export default function Intro() {
	const textType = useRef();
	useEffect(() => {
		init(textType.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: [
				"FullStack Web Developer",
				"Node.js developer",
				"Software Engineer",
			],
		});
	}, []);
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imageContainer">
					<img src="assets/mm.png " alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>Raouf Satto</h1>
					<h3>
						Freelancer <span ref={textType}></span>
					</h3>
				</div>
				<a href="#portfolio">
					<img src="assets/down.png" alt="" />
				</a>
			</div>
		</div>
	);
}
