import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Form from './components/Form';
import BookmarkList from './components/BookmarkList';

function App() {
	// Functions and properties for components here
	const [ bookmarks, setBookmarks ] = useState([]);

	useEffect(() => {
		const getBookmarks = async () => {
			const bookmarksFromServer = await fetchBookmarks();
			setBookmarks(bookmarksFromServer);
		};

		getBookmarks();
	}, []);

	// console.log(bookmarks);

	const addBookmarkHandler = async (bookmark) => {
		addBookmark(bookmark);
	};

	const deleteBookmarkHandler = async (id) => {
		const res = await fetch(`http://localhost:5000/api/bookmark/${id}`, {
			method: 'DELETE'
		});
		const filtered = bookmarks.filter((bookmark) => bookmark._id !== id);

		res.status === 200 ? setBookmarks(filtered) : alert('Error Deleting This Task');
	};

	const fetchBookmarks = async () => {
		const res = await fetch('http://localhost:5000/api/bookmark');
		const data = await res.json();

		return data.data;
	};

	const addBookmark = async (bookmark) => {
		const res = await fetch(`http://localhost:5000/api/bookmark`, {
			method: 'POST',
			body: JSON.stringify(bookmark),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await res.json();
		setBookmarks([ ...bookmarks, data.data ]);
	};

	const buttonStyle = {
		primary: 'btn-primary',
		secondary: 'btn-secondary',
		danger: 'btn-danger'
	};

	return (
		<div className='container'>
			<Header />
			<div className='row bg-white rounded mt-3 shadow-sm p-4'>
				<Form buttonStyle={buttonStyle} onAddBookmark={addBookmarkHandler} />
			</div>

			<BookmarkList
				buttonStyle={buttonStyle}
				bookmarks={bookmarks}
				deleteBookmarkHandler={deleteBookmarkHandler}
			/>
		</div>
	);
}

export default App;
