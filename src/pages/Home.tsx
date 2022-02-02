import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import { AppContext } from '../context';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const { posts, token } = useContext(AppContext);

	useEffect(() => {
		if (!token) {
			navigate('/login');
		}
	}, [token, navigate]);

	console.log('posts', posts)

	return (
		<div className="home">
			<CreatePost />
			<div className="posts-wrapper">
				{posts.map(post => (
					<Post key={post._id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Home;
