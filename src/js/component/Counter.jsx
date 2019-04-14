import React from "react"

function Counter() {
	return (
		<div className="text-center mt-6 row container" id="clock">
			<div className="clock col-2">
				<i className="far fa-clock" />
			</div>
			<div className="c100000 col-1">0</div>
			<div className="c010000 col-1">0</div>
			<div className="c001000 col-1">0</div>
			<div className="c000100 col-1">0</div>
			<div className="c000010 col-1">0</div>
			<div className="c000001 col-1">0</div>
		</div>
	);
}

export default Counter