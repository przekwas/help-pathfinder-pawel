import React, { useState } from 'react';
import Tile from './Tile';

const Row = ({ tileCount, ...rest }) => {
	const [rowDim, setRowDim] = useState(false);

	return (
		<div className="row">
			{tileCount.map((tile, i) => (
				<Tile
					key={i}
					tile={tile}
					rowDim={rowDim}
					setRowDim={setRowDim}
					{...rest}
				/>
			))}
		</div>
	);
};

export default Row;
