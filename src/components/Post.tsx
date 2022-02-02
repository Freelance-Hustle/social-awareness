import { DeleteSharp } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import React, { useContext } from 'react';
import { AppContext } from '../context';

export type PostProps = {
	_id?: string;
	user?:string;
	title: string;
	content: string;
	createdAt?:string;
	updatedAt?:string;
};

const Post: React.FC<{ post: PostProps }> = props => {
	const { deletePost, loginCredentials } = useContext(AppContext);

	return (
		<div className="post">
			<div className="post-title">
				<h1>{props.post.title}</h1>
			</div>
			<div className="post-body">
				<p>{props.post.content}</p>
			</div>
			<div className="post-footer">
				<IconButton title="Approve post">
					<button className="btn btn-primary">Approve</button>
				</IconButton>
				{props.post?.user === loginCredentials!.id && <IconButton
					title="Delete post"
					onClick={async () =>props.post._id&& await deletePost?.(props.post?._id)}
				>
					<DeleteSharp color="error" />
				</IconButton>}
			</div>
		</div>
	);
};

export default Post;
