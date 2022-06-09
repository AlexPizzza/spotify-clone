import './BodySongs.css';

import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SongRow from './SongRow/SongRow';
import { useStateProviderValue } from '../../../../context/StateProvider';

const BodySongs = () => {
	const [{ discover_weekly }] = useStateProviderValue();

	return (
		<div className='bodySongs'>
			<div className='bodySongs__icons'>
				<PlayCircleFilledIcon className='bodySongs__shuffle' />
				<FavoriteIcon fontSize='large' />
				<MoreHorizIcon />
			</div>

			{discover_weekly?.tracks.items.map((item) => (
				<SongRow key={item.track.id} track={item.track} />
			))}
		</div>
	);
};

export default BodySongs;
