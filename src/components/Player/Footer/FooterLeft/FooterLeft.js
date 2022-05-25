import './FooterLeft.css';

const FooterLeft = () => {
	return (
		<div className='footerLeft'>
			<img
				className='footer__albumLogo'
				src='https://upload.wikimedia.org/wikipedia/en/2/2e/Usher-yeah.jpg'
				alt='Album cover'
			/>
			<div className='footer__songInfo'>
				<h4>No song is playing</h4>
				<p>...</p>
			</div>
		</div>
	);
};

export default FooterLeft;
