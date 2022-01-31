import React from 'react';

import './Footer.scss';

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="links">
				<h1>Quick Links</h1>
				<a href="/">Home</a>
				<a href="/">Products</a>
				<a href="/">About Us</a>
			</div>
			<div className="icons">
				<h1>Follow Us</h1>
			</div>
			<div className="news">
				<h1>Our Newsletter</h1>
				<p>Get latest posts, best deals and any other relevant information.</p>
			</div>
		</footer>
	);
};

export default Footer;