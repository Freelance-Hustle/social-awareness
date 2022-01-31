import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import './Login.scss';

const Register: React.FC = () => {
	const signup = () => {};
	return (
		<div className="wrapper">
			<div className="login-card">
				<form onSubmit={signup} className="login-form">
				<div className="login-top">
					<Avatar src={`/users/:id`} />
					<h1>Register</h1>
				</div>
					<label htmlFor="username" className="login-label">
						Username
					</label>
					<input
						type="text"
						placeholder="Enter username"
						className="form-control"
						id="username"
					/>
					<label htmlFor="email" className="login-label">
						Email
					</label>
					<input
						type="text"
						placeholder="Enter email"
						className="form-control"
						id="email"
					/>
					<label htmlFor="password" className="login-label">
						Password
					</label>
					<input
						type="Password"
						placeholder="Password"
						className="form-control"
						id="password"
					/>
					<label htmlFor="confirmPassword" className="login-label">
						Confirm Password
					</label>
					<input
						type="Password"
						placeholder="Confirm password"
						className="form-control"
						id="confirmPassword"
					/>
					<button type="submit" className="btn btn-primary">
						Register
					</button>
					<div className="form-links">
					<span>Already have an account? </span>
					<Link to="/login">Login</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
