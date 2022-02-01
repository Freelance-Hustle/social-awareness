import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes/Routes';
import './App.scss';
import { AppProvider } from './context';
import { PostProps } from './components/Post';
import { useSnackbar, SnackbarProvider } from 'notistack';
import axios, { handleFetch } from './utils/axios';

export type LoginCredentialsProps = {
	id: string;
	email: string;
	name: string;
};

export type LoginProps = {
	email: string;
	password: string;
};

const App: React.FC = (): JSX.Element => {
	const snack = useSnackbar();
	const [loginCredentials, setLoginCredentials] =
		useState<LoginCredentialsProps | null>(null);
	const [posts, setPosts] = useState<PostProps[]>([]);

	const addPost = async (post: PostProps): Promise<void> => {
		try {
			console.log(post);
			//TODO: add post to database
			setPosts([...posts, post]);
		} catch (err: any) {
			snack?.enqueueSnackbar(err.message, {
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
			snack?.enqueueSnackbar(err.message, {
				variant: 'error',
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'right',
				},
			});
		}
	};

	const loginUser = async (user: LoginProps) => {
		try {
			const data = await handleFetch('/users/login', 'post', user)
			// console.log(data);
		} catch (err: any) {
			snack?.enqueueSnackbar(err.message, {
				variant: 'error',
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'right',
				},
			});
		}
	};

	return (
		<SnackbarProvider maxSnack={3}>
			<AppProvider
				value={{
					loginCredentials,
					posts,
					addPost,
					deletePost,
					loginUser,
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
		</SnackbarProvider>
	);
};

export default App;
