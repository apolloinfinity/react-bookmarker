import React from 'react';
import Button from './Button';

const Bookmarks = ({ buttonStyle }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <a href='/mew'>Apple</a>
      <div className='d-flex w-25 justify-content-evenly'>
        <Button btnStyle={buttonStyle.secondary} btnText={'Visit'} />
        <Button btnStyle={buttonStyle.danger} btnText={'Delete'} />
      </div>
    </li>
  );
};

export default Bookmarks;
