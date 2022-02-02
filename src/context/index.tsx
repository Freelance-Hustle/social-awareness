import React from 'react';
import { LoginCredentialsProps, LoginProps, RegisterProps } from '../App';
import { PostProps } from '../components/Post';

export type AppContextProps = {
	token: string | null;
	loginCredentials: LoginCredentialsProps | null;
	posts: PostProps[];
	addPost?: (post: PostProps) => Promise<void>;
	deletePost?: (id: string) => Promise<void>;
	registerUser?: (user: RegisterProps) => Promise<void>;
	loginUser?: (user: LoginProps) => Promise<void>;
	logOut?: () => void;
};

export const AppContext: React.Context<AppContextProps> =
	React.createContext<AppContextProps>({
		loginCredentials: null,
		posts: [],
		token: null,
	});
export const AppProvider: React.Provider<AppContextProps> = AppContext.Provider;
export const AppConsumer: React.Consumer<AppContextProps> = AppContext.Consumer;
