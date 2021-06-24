import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Form from './components/Form';
import BookmarkList from './components/BookmarkList';

function App() {
	// Functions and properties for components here
	const [ loadBookmarks, setLoadBookmarks ] = useState([]);

	useEffect(() => {
		const getBookmarks = async () => {
			const bookmarksFromServer = await fetchBookmarks();
			setLoadBookmarks(bookmarksFromServer);
		};

		getBookmarks();
	}, []);

	console.log(loadBookmarks);

	const addBookmarkHandler = async (bookmark) => {
		addBookmark(bookmark);
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
		setLoadBookmarks([ ...loadBookmarks, data.data ]);
	};

	const buttonStyle = {
		primary: 'btn-primary',
		secondary: 'btn-secondary',
		danger: 'btn-danger'
	};

	return (
		<div className='App container'>
			<Header />
			<div className='row bg-white rounded mt-5 shadow-sm p-4'>
				<Form buttonStyle={buttonStyle} onAddBookmark={addBookmarkHandler} />
			</div>
			{loadBookmarks.length !== 0 && (
				<BookmarkList buttonStyle={buttonStyle} bookmarks={loadBookmarks} />
			)}
		</div>
	);
}

export default App;
