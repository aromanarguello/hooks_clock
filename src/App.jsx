import React, { useState, useEffect } from "react";
import { ClockFrame, Time, ToggleButton, TopBar, MainContainer, CalendarDates } from "./App.styles";

const App = () => {
	const [state, setState] = useState({ time: new Date() });
	const [stateBorder, setBorder] = useState({ border: false });
	const { time } = state;
	const { border } = stateBorder;

	const currentTime = () => {
		setState({ time: new Date() });
	};

	useEffect(() => {
		setInterval(() => currentTime(), 1000);
	}, []);

	const toggleDate = () => {
		setBorder({ border: !border });
	};

	return (
		<MainContainer>
			<TopBar>React Clock</TopBar>
			<ToggleButton onClick={toggleDate} border={border} />
			<ClockFrame>
				<Time>{time.toLocaleTimeString()}</Time>
				<CalendarDates>{border && time.toLocaleDateString()}</CalendarDates>
			</ClockFrame>
		</MainContainer>
	);
};

export default App;
