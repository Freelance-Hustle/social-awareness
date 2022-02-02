import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Avatar, IconButton } from '@material-ui/core';
import './Login.scss';
import { RegisterProps } from '../App';
import { AppContext } from '../context';

const Register: React.FC = () => {
	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();
	const { registerUser, token } = useContext(AppContext);
	const [user, setUser] = useState<RegisterProps & { confirmPassword: string }>(
		{
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		}
	);

	useEffect(() => {
		if (token) {
			navigate('/');
		}
	}, [token, navigate]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
	) => {
		try {
			e.preventDefault();

			const { confirmPassword, ...restUser } = user;

			if (user.password !== confirmPassword) {
				throw Error(`Error: Password do not match!`);
			}

			await registerUser?.(restUser);

			if (token) {
				navigate('/');
			}
		} catch (err: any) {
			enqueueSnackbar(err.message, {
				variant: 'error',
				anchorOrigin: {
					horizontal: 'right',
					vertical: 'top',
				},
			});
		}
	};

	return (
		<div className="wrapper">
			<div className="login-card">
				<form onSubmit={handleSubmit} className="login-form">
					<div className="login-top">
						<Avatar src={`/users/:id`} />
						<h1>Register</h1>
					</div>
					<label htmlFor="name" className="login-label">
						Full Name
					</label>
					<input
						type="text"
						placeholder="Enter full name"
						className="form-control"
						id="name"
						name="name"
						value={user.name}
						onChange={handleChange}
						required
					/>
					<label htmlFor="email" className="login-label">
						Email
					</label>
					<input
						type="email"
						placeholder="Enter email"
						className="form-control"
						id="email"
						name="email"
						value={user.email}
						onChange={handleChange}
						required
					/>
					<label htmlFor="password" className="login-label">
						Password
					</label>
					<input
						type="Password"
						placeholder="Password"
						className="form-control"
						id="password"
						name="password"
						value={user.password}
						onChange={handleChange}
						required
					/>
					<label htmlFor="confirmPassword" className="login-label">
						Confirm Password
					</label>
					<input
						type="Password"
						placeholder="Confirm password"
						className="form-control"
						id="confirmPassword"
						name="confirmPassword"
						value={user.confirmPassword}
						onChange={handleChange}
						required
					/>
					<IconButton title="Register a new account" onClick={handleSubmit}>
						<button type="submit" className="btn btn-primary">
							Register
						</button>
					</IconButton>

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
