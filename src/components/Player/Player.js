import './Player.css';

import PlayerBody from './PlayerBody/PlayerBody';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

const Player = ({ spotify }) => {
	return (
		<div className='player'>
			<div className='player__body'>
				<Sidebar />
				<PlayerBody spotify={spotify} />
			</div>

			<Footer />
		</div>
	);
};

export default Player;
