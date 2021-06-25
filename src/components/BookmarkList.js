import Bookmark from './Bookmark';

const BookmarkList = ({ buttonStyle, bookmarks, deleteBookmarkHandler }) => {
	return (
		<div className='row bg-white rounded mt-5 shadow-sm p-4'>
			<ul className='list-group'>
				{bookmarks.length > 0 ? (
					bookmarks.map((bookmark) => (
						<Bookmark
							key={bookmark._id}
							bookmark={bookmark}
							buttonStyle={buttonStyle}
							onDelete={deleteBookmarkHandler}
						/>
					))
				) : (
					<p>No Bookmarks</p>
				)}
			</ul>
		</div>
	);
};

export default BookmarkList;
