import React from 'react';

// Components
import Button from './Button';

const Form = ({ buttonStyle }) => {
  return (
    <div className='mt-5 text-center'>
      <h2 className='text-black-50'>Bookmark Your Favorite Sites</h2>
      <form>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label text-primary'>
            Description
          </label>
          <input
            type='text'
            className='form-control'
            name='description'
            id='description'
            placeholder='Site Description'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='url' className='form-label text-primary'>
            Site URL
          </label>
          <input
            type='text'
            className='form-control'
            name='url'
            id='url'
            placeholder='Website URL'
          />
        </div>
      </form>
      <Button btnStyle={buttonStyle.primary} btnText={'Submit'} />
    </div>
  );
};

export default Form;
