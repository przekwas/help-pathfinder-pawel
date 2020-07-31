import React from 'react';
import Tile from './Tile';

const Row = ({ tileCount, ...rest }) => {
	return (
		<div className="row">
			{tileCount.map((tile, i) => (
				<Tile key={i} tile={tile} {...rest} />
			))}
		</div>
	);
};

export default Row;