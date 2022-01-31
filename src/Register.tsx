const Register: React.FC = () => {
	const signup = () => {};
	return (
		<div>
			<form onSubmit={signup}>
				<h1>Login</h1>
				<label htmlFor="username">Username</label>
				<input type="text" placeholder="Username" />
				<label htmlFor="password">Password</label>
				<input type="password" placeholder="Password" />
				<button type="submit" className="login-btn">
					Login
				</button>
				<a href="/forgot-password">Forgot password</a>
				<a href="/register">Sign up</a>
			</form>
		</div>
	);
};

export default Register;
