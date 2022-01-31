import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';

const Header: React.FC<RouteComponentProps> = props => {
	return (
		<header className="header">
			<nav>
				<NavLink
					to="/login"
					className="header-link"
					activeClassName="header-link-active"
				>
					Login
				</NavLink>
				<NavLink
					to="/register"
					className="header-link"
					activeClassName="header-link-active"
				>
					Sign up
				</NavLink>
				<NavLink
					to="/admin"
					className="header-link"
					activeClassName="header-link-active"
				>
					Admin
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
