import React from 'react';
import Bookmarks from './Bookmark';

const BookmarkList = ({ buttonStyle }) => {
  return (
    <div className='row bg-white rounded mt-5 shadow-sm p-4'>
      <ul className='list-group'>
        <Bookmarks buttonStyle={buttonStyle} />
      </ul>
    </div>
  );
};

export default BookmarkList;
