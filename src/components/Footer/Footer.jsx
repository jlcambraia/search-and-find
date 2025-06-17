import './Footer.css';

const Footer = () => {
	function getCurrentYear() {
		const today = new Date();
		const year = today.getFullYear();
		return year;
	}

	return (
		<footer className='footer'>
			<p className='footer__copyrights'>
				&copy; {getCurrentYear()} João Luiz Cambraia
			</p>
		</footer>
	);
};

export default Footer;
