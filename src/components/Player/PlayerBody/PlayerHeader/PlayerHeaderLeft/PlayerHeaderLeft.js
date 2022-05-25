import './PlayerHeaderLeft.css';

import SearchIcon from '@mui/icons-material/Search';

const PlayerHeaderLeft = () => {
	return (
		<div className='playerHeaderLeft'>
			<SearchIcon />
			<input placeholder='Search for Artists, Songs or Podcasts' type='text' />
		</div>
	);
};

export default PlayerHeaderLeft;
