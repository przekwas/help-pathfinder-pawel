import React, { useState } from 'react';

const Tile = ({ tile, dispatch }) => {
    const [hitOrMiss, setHitOrMiss] = useState('');
    const [clicked, setClicked] = useState(false);

	const tileClick = e => {
        if(clicked) return;
		if (Number(e.target.id) === 0) {
			setHitOrMiss('right');
			dispatch({ type: 'right' });
		} else {
			setHitOrMiss('wrong');
			dispatch({ type: 'wrong' });
        }
        setClicked(true);
	};

	return <div onClick={tileClick} className={`tile ${hitOrMiss}`} id={tile}></div>;
};

export default Tile;
