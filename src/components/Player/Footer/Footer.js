import './Footer.css';

import FooterLeft from './FooterLeft/FooterLeft';
import FooterCenter from './FooterCenter/FooterCenter';
import FooterRight from './FooterRight/FooterRight';

const Footer = () => {
	return (
		<div className='footer'>
			<FooterLeft />

			<FooterCenter />

			<FooterRight />
		</div>
	);
};

export default Footer;
