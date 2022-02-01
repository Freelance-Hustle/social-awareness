import React, { useContext } from 'react';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import { AppContext } from '../context';

const Home: React.FC = () => {
	const { posts } = useContext(AppContext);

	return (
		<div className="home">
			<CreatePost />
			<div className="posts-wrapper">
				{posts.map(post => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Home;
