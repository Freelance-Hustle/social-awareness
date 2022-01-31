import React from 'react';
import {Link} from "react-router-dom";
import { Avatar } from '@material-ui/core';
import './Login.scss';

const Login: React.FC = () => {
	const login = () => {};
	return (
		<div className="wrapper">
			<div className="login-card">
				<div className="login-top">
					<Avatar src={`/users/:id`} />
					<h1>Login</h1>
				</div>
				<form onSubmit={login} className="login-form">
					<label htmlFor="username" className="login-label">
						Username
					</label>
					<input
						type="text"
						placeholder="Enter username"
						className="form-control"
					/>
					<label htmlFor="password" className="login-label">
						Password
					</label>
					<input
						type="Password"
						placeholder="Password"
						className="form-control"
					/>
					<button type="submit" className="btn btn-primary">
						Login
					</button>
					<div className="form-links">
						<Link to="/login">Forgot password</Link>
						<Link to="/signup">Sign up</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
