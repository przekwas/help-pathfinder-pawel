import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tile from './Tile';

const Row = ({ tileCount, gameRow, whichRow, ...rest }) => {
	const [rowDim, setRowDim] = useState(false);

	return (
		<div className={`row ${gameRow === whichRow && 'current-row'}`}>
			{tileCount.map((tile, i) => (
				<Tile
					key={`col-${i}`}
					tile={tile}
                    rowDim={rowDim}
                    gameRow={gameRow}
                    whichRow={whichRow}
					setRowDim={setRowDim}
					{...rest}
				/>
			))}
		</div>
	);
};

export default Row;