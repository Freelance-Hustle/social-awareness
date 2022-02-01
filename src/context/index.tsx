import React from 'react';
import { LoginCredentialsProps, LoginProps } from '../App';
import { PostProps } from '../components/Post';

export type AppContextProps = {
	loginCredentials: LoginCredentialsProps | null;
	posts: PostProps[];
	addPost?: (post: PostProps) => Promise<void>;
	deletePost?: (id: string) => Promise<void>;
	loginUser?: (user: LoginProps) => Promise<void>;
};

export const AppContext: React.Context<AppContextProps> =
	React.createContext<AppContextProps>({
		loginCredentials: null,
		posts: [],
	});
export const AppProvider: React.Provider<AppContextProps> = AppContext.Provider;
export const AppConsumer: React.Consumer<AppContextProps> = AppContext.Consumer;
