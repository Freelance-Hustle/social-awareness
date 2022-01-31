import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<header className="header">
			<nav>
				<Link to="/signup" className="header-link">
					Sign up
				</Link>
				<Link to="/login" className="header-link">
					Login
				</Link>
				{/* <Link to="/admin" className="header-link">
					Admin
				</Link> */}
			</nav>
		</header>
	);
};

export default Header;
