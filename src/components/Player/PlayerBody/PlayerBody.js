import BodyInfo from './BodyInfo/BodyInfo';
import BodySongs from './BodySongs/BodySongs';
import './PlayerBody.css';
import PlayerHeader from './PlayerHeader/PlayerHeader';

const PlayerBody = ({ spotify }) => {
	return (
		<div className='playerBody'>
			<PlayerHeader spotify={spotify} />

			<BodyInfo />

			<BodySongs />
		</div>
	);
};

export default PlayerBody;
