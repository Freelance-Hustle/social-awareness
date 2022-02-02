import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import './Login.scss';
import { AppContext } from '../context';
import { LoginProps } from '../App';

const Login: React.FC = () => {
	const navigate = useNavigate();
	const { loginUser, token } = useContext(AppContext);
	const [user, setUser] = useState<LoginProps>({
		email: '',
		password: '',
	});

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

			await loginUser?.(user);

			if (token) {
				navigate('/');
			}
		} catch (err: any) {
			console.log(err);
		}
	};

	return (
		<div className="wrapper">
			<div className="login-card">
				<div className="login-top">
					<Avatar src={`/users/:id`} />
					<h1>Login</h1>
				</div>
				<form onSubmit={handleSubmit} className="login-form">
					<label htmlFor="username" className="login-label">
						Email
					</label>
					<input
						type="email"
						placeholder="accounts@example.com"
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
						type="password"
						placeholder="*********"
						className="form-control"
						id="password"
						name="password"
						value={user.password}
						onChange={handleChange}
						required
					/>
					<IconButton title="login to your account" onClick={handleSubmit}>
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</IconButton>

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
