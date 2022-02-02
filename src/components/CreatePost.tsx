import React, { useContext, useState } from 'react';
import { IconButton } from '@material-ui/core';
import './Createpost.scss';
import { AppContext } from '../context';

type Post = {
	title: string;
	content: string;
};

const CreatePost: React.FC = () => {
	const [post, setPost] = useState<Post>({
		title: '',
		content: '',
	});
	const [id, setId] = useState<number>(1);

	const { addPost } = useContext(AppContext);

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
	) => {
		try {
			e.preventDefault();
			
			await addPost?.(post);
			setId(id + 1);
		} catch (err: any) {
			console.log(err);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="createpost-wrapper">
			<form onSubmit={handleSubmit}>
				<div className="form-wrapper">
					<label htmlFor="title" className="label">
						Title:
					</label>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Enter title"
						className="form-control"
						value={post.title}
						onChange={handleChange}
					/>
				</div>
				<div className="form-wrapper">
					<label htmlFor="body" className="label">
						Body:
					</label>
					<textarea
						name="content"
						id="content"
						cols={30}
						rows={5}
						className="form-control"
						placeholder="Message"
						value={post.content}
						onChange={handleChange}
					></textarea>
				</div>
				<div className="form-footer">
					<IconButton title="Create post" onClick={handleSubmit}>
						<button className="btn btn-primary" type="submit">
							Create Post
						</button>
					</IconButton>
				</div>
			</form>
		</div>
	);
};

export default CreatePost;
