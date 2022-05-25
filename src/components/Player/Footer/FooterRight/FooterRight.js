import './FooterRight.css';

import { Grid, Slider } from '@mui/material';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const FooterRight = () => {
	return (
		<div className='footerRight'>
			<Grid container spacing={2}>
				<Grid item>
					<PlaylistPlayIcon />
				</Grid>
				<Grid item>
					<VolumeDownIcon />
				</Grid>
				<Grid item xs>
					<Slider className='slider' />
				</Grid>
			</Grid>
		</div>
	);
};

export default FooterRight;
