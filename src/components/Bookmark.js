import React from 'react';
import Button from './shared/Button';

const Bookmark = ({ buttonStyle, bookmark }) => {
	return (
		<li
			className='list-group-item d-flex justify-content-between align-items-center'
			id={bookmark._id}
		>
			<p>{bookmark.urlName}</p>
			<div className='d-flex w-25 justify-content-evenly'>
				<a
					href={bookmark.url}
					target='_blank'
					rel='noreferrer'
					className='btn btn-success'
				>
					Visit
				</a>
				<Button btnStyle={buttonStyle.secondary}>Delete</Button>
			</div>
		</li>
	);
};

export default Bookmark;
