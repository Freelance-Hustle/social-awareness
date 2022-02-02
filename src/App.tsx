import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes/Routes';
import './App.scss';
import { AppProvider } from './context';
import { PostProps } from './components/Post';
import { useSnackbar } from 'notistack';
import { handleFetch } from './utils/axios';

export type LoginCredentialsProps = {
	id: string;
	email: string;
	name: string;
};

export type LoginProps = {
	email: string;
	password: string;
};

export type RegisterProps = {
	name: string;
	email: string;
	password: string;
};

const App: React.FC = (): JSX.Element => {
	const { enqueueSnackbar } = useSnackbar();
	const [token, setToken] = useState<string | null>(null);
	const [loginCredentials, setLoginCredentials] =
		useState<LoginCredentialsProps | null>(null);
	const [posts, setPosts] = useState<PostProps[]>([]);

	const addPost = async (post: PostProps): Promise<void> => {
		try {
			console.log(post);
			//TODO: add post to database
			setPosts([...posts, post]);
		} catch (err: any) {
			enqueueSnackbar(err.message, {
				variant: 'error',
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'right',
				},
			});
		}
	};

	const deletePost = async (id: string): Promise<void> => {
		try {
			//TODO: delete post from database
			setPosts(posts.filter(post => post.id !== id));
		} catch (err: any) {
			enqueueSnackbar(err.message, {
				variant: 'error',
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'right',
				},
			});
		}
	};

	const registerUser = async (user: RegisterProps) => {
		try {
			const res = await handleFetch('/users/register', 'post', user);

			if (res) {
				enqueueSnackbar(res.message, {
					variant: 'success',
					anchorOrigin: {
						horizontal: 'right',
						vertical: 'top',
					},
				});
			}

			setToken(res.data.token);
			setLoginCredentials(res.data.user);
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

	const loginUser = async (user: LoginProps) => {
		try {
			const res = await handleFetch('/users/login', 'post', user);

			if (res) {
				enqueueSnackbar(res.message, {
					variant: 'success',
					anchorOrigin: {
						horizontal: 'right',
						vertical: 'top',
					},
				});
			}

			setToken(res.data.token);
			setLoginCredentials(res.data.user);
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

	const logOut = () => {
		setLoginCredentials(null);
		setToken(null);
		enqueueSnackbar(`You have been logged out succesfully!`, {
			variant: 'success',
			anchorOrigin: {
				horizontal: 'right',
				vertical: 'top',
			},
		});
	};

	return (
		<AppProvider
			value={{
				token,
				loginCredentials,
				posts,
				addPost,
				deletePost,
				registerUser,
				loginUser,
				logOut,
			}}
		>
			<div className="app-wrapper">
				<Router>
					<Header />
					<Routes />
					<Footer />
				</Router>
			</div>
		</AppProvider>
	);
};

export default App;
