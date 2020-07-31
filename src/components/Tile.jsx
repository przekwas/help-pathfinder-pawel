import React, { useState } from 'react';

const Tile = ({ tile, rowDim, setRowDim, gameRow, whichRow, dispatch }) => {
	const [hitOrMiss, setHitOrMiss] = useState('');
	const [clicked, setClicked] = useState(false);

	const tileClick = e => {
		if (clicked || rowDim || gameRow !== whichRow) return;
		if (Number(e.target.id) === 0) {
			setHitOrMiss('right');
			setRowDim(true);
			dispatch({ type: 'right' });
		} else {
			setHitOrMiss('wrong');
			dispatch({ type: 'wrong' });
		}
		setClicked(true);
	};

	return (
		<div
			onClick={tileClick}
			className={`tile-base tile ${hitOrMiss} ${rowDim && 'dim'}`}
			id={tile}
		/>
	);
};

export default Tile;
