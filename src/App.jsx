import React, { useReducer, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { makeGrid } from './utils/make-grid';
import { countReducer, initialCount } from './utils/count-reducer';

import './styles/app.css';
import Row from './components/Row';

const grid = makeGrid({ rows: 10, cols: 10 });

const App = () => {
	const [state, dispatch] = useReducer(countReducer, initialCount);

	return (
		<>
			<div className="totals">
				<h5>
					Total Correct: <span className="correct">{state.correct}</span>
				</h5>
				<h5>Total Guesses: {state.correct + state.incorrect}</h5>
				<h5>
					Total Wrong: <span className="incorrect">{state.incorrect}</span>
				</h5>
			</div>
			{grid.map((row, i) => (
				<Row
					key={`row-${i}`}
					whichRow={i}
					gameRow={state.gameRow}
					tileCount={row}
					dispatch={dispatch}
				/>
			))}
		</>
	);
};

export default App;
