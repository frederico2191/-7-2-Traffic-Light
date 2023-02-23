import React from "react";
import { useState, useEffect } from "react";
import "./home.css"

//include images into your bundle

const allColors = ["red", "yellow", "green"]

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [colors, setColors] = useState(allColors);

	const handleOnClick = (newColor) => setColor(newColor)
	const handleAddColor = () => {
		console.log("colors1", allColors)
		setColors([...colors, "purple"])
		console.log("colors2", allColors)
	}

	return (
		<div className="traffic-light">
			<div className="traffic-light__top"></div>
			<div className="traffic-light__container">
				{colors.map(element => (
					<div style={{ backgroundColor: element }} className={`traffic-color ${color === element && 'traffic-color__selected'}`} onClick={() => handleOnClick(element)}></div>
				))}
				{/* <div className={`traffic-color traffic-color__red ${color === 'red' && 'traffic-color__selected'}`} onClick={() => handleOnClick('red')}></div>
				<div className={`traffic-color traffic-color__yellow ${color === 'yellow' && 'traffic-color__selected'}`} onClick={() => handleOnClick('yellow')}></div>
				<div className={`traffic-color traffic-color__green ${color === 'green' && 'traffic-color__selected'}`} onClick={() => handleOnClick('green')}></div> */}
			</div>
			<button onClick={handleAddColor}> here!!</button>
		</div>
	);
};

export default Home;
