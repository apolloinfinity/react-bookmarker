import React from 'react';

const Bookmark = ({ bookmark, onDelete }) => {
	return (
		<li
			className='list-group-item d-flex justify-content-between align-items-center'
			id={bookmark._id}
		>
			<p className='fs-4 m-0 text-info bookmark-name'>{bookmark.urlName}</p>
			<div className='d-flex gap-2 justify-content-evenly actions'>
				<a
					href={bookmark.url}
					target='_blank'
					rel='noreferrer'
					className='btn btn-success'
				>
					Visit
				</a>
				<button
					className='btn btn-outline-danger'
					onClick={() => onDelete(bookmark._id)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Bookmark;
