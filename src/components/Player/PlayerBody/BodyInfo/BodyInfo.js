import './BodyInfo.css';

import { useStateProviderValue } from '../../../../context/StateProvider';

const BodyInfo = () => {
	const [{ discover_weekly }] = useStateProviderValue();

	return (
		<div className='bodyInfo'>
			<img
				src={discover_weekly?.images[0].url}
				alt={discover_weekly?.description}
			/>

			<div className='bodyInfo__text'>
				<strong>PLAYLIST</strong>
				<h2>Discover Weekly</h2>
				<p>{discover_weekly?.description}</p>
			</div>
		</div>
	);
};

export default BodyInfo;
