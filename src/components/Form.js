import { useRef } from 'react';

// Components
import Button from './shared/Button';

const Form = ({ buttonStyle, onAddBookmark }) => {
	// const descriptionInputRef = useRef();
	const urlInputRef = useRef();
	const urlNameInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredUrlName = urlNameInputRef.current.value;
		const enteredUrl = urlInputRef.current.value;

		const bookmark = {
			urlName: enteredUrlName,
			url: enteredUrl,
			user: 'JR'
		};

		onAddBookmark(bookmark);
		event.target.reset();
	};

	return (
		<div className='mt-5 text-center'>
			<h2 className='text-black-50'>Bookmark Your Favorite Sites</h2>
			<form onSubmit={submitHandler}>
				<div className='mb-3'>
					<label htmlFor='urlName' className='form-label text-primary'>
						URL Name
					</label>
					<input
						type='text'
						className='form-control'
						name='urlName'
						id='urlName'
						ref={urlNameInputRef}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='url' className='form-label text-primary'>
						Site URL
					</label>
					<input
						type='url'
						className='form-control'
						name='url'
						id='url'
						ref={urlInputRef}
					/>
				</div>

				<div>
					<Button btnStyle={buttonStyle.primary}>Add Bookmark</Button>
				</div>
			</form>
		</div>
	);
};

export default Form;
