import './PlayerHeaderRight.css';

import { useStateProviderValue } from '../../../../../context/StateProvider';

import { Avatar } from '@mui/material';

const PlayerHeaderRight = () => {
	const [{ user }] = useStateProviderValue();

	return (
		<div className='playerHeaderRight'>
			<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
			<h4>{user?.display_name}</h4>
		</div>
	);
};

export default PlayerHeaderRight;
