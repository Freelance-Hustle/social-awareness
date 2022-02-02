import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import { AppContext } from '../context';
import { ExitToApp } from '@material-ui/icons';

const Header: React.FC = () => {
	const { loginCredentials, logOut } = useContext(AppContext);

	return (
		<header className="header">
			{loginCredentials ? (
				<nav className="nav">
					<div className="avatar-wrapper">
						<Avatar className="avatar" /> <p>{loginCredentials.name}</p>
					</div>
					<div>
						<p>
							<IconButton title="Log out" onClick={() => logOut?.()}>
								<ExitToApp />
							</IconButton>
						</p>
					</div>
				</nav>
			) : (
				<nav className="nav">
					<Link to="/signup" className="header-link">
						Sign up
					</Link>
					<Link to="/login" className="header-link">
						Login
					</Link>
				</nav>
			)}
		</header>
	);
};

export default Header;
