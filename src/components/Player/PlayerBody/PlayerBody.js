import BodyInfo from './BodyInfo/BodyInfo';
import './PlayerBody.css';
import PlayerHeader from './PlayerHeader/PlayerHeader';

const PlayerBody = ({ spotify }) => {
	return (
		<div className='playerBody'>
			<PlayerHeader />

			<BodyInfo />
		</div>
	);
};

export default PlayerBody;
