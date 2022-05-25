import './PlayerHeader.css';

import PlayerHeaderLeft from './PlayerHeaderLeft/PlayerHeaderLeft';
import PlayerHeaderRight from './PlayerHeaderRight/PlayerHeaderRight';

const PlayerHeader = () => {
	return (
		<div className='playerHeader'>
			<PlayerHeaderLeft />

			<PlayerHeaderRight />
		</div>
	);
};

export default PlayerHeader;
