import Bookmark from './Bookmark';

const BookmarkList = ({ buttonStyle, bookmarks }) => {
	return (
		<div className='row bg-white rounded mt-5 shadow-sm p-4'>
			<ul className='list-group'>
				{bookmarks.map((bookmark, index) => (
					<Bookmark key={index} bookmark={bookmark} buttonStyle={buttonStyle} />
				))}
			</ul>
		</div>
	);
};

export default BookmarkList;
