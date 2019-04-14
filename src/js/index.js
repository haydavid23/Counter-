import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.css";
import PropTypes from "prop-types";

function Home(props) {
	return (
		<div className="container-fluid">
			<div className="text-center mt-6 row" id="clock">
				<div className="col-4">
					<i className="far fa-clock text-light" />
				</div>
				<div className="c001000 col-2 text-light">
					{props.four % 10}
				</div>
				<div className="c000100 col-2 text-light ">
					{props.three % 10}
				</div>
				<div className="c000010 col-2 text-light">{props.two % 10}</div>
				<div className="c000010 col-2 text-light">{props.one % 10}</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number
};

let count = 0;

setInterval(function() {
	const digitFour = Math.floor(count / 1000);
	const digitThree = Math.floor(count / 100);
	const digitTwo = Math.floor(count / 10);
	const digitOne = Math.floor(count / 1);

	count++;

	ReactDOM.render(
		<Home
			one={digitOne}
			two={digitTwo}
			three={digitThree}
			four={digitFour}
		/>,
		document.querySelector("#app")
	);
}, 1000);
