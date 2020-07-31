import React, { useReducer } from 'react';
import './styles/app.css';

import Row from './components/Row';

const mapData = [
	[1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
	[1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
	[1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 0, 1, 1, 1, 1]
];

const initialCount = {
    incorrect: 0,
    correct: 0
};

const countReducer = (state, action) => {
	switch (action.type) {
		case 'right':
			return { ...state, correct: state.correct + 1 };
		case 'wrong':
			return { ...state, incorrect: state.incorrect + 1 };
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(countReducer, initialCount);

	return (
		<>
			<div className="totals">
				<h5>Total Correct: <span className="correct">{state.correct}</span></h5>
				<h5>Total Guesses: {state.correct + state.incorrect}</h5>
				<h5>Total Wrong: <span className="incorrect">{state.incorrect}</span></h5>
			</div>
			{mapData.map((row, i) => (
				<Row
					key={`row-count-${i}`}
					tileCount={row}
					dispatch={dispatch}
				/>
			))}
		</>
	);
};

export default App;
