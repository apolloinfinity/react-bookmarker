import './App.css';

// Components
import Header from './components/Header';
import Form from './components/Form';
import BookmarkList from './components/BookmarkList';

function App() {
  // Functions and properties for components here
  const buttonStyle = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
  };
  return (
    <div className='App container'>
      <Header />
      <div className='row bg-white rounded mt-5 shadow-sm p-4'>
        <Form buttonStyle={buttonStyle} />
      </div>
      <BookmarkList buttonStyle={buttonStyle} />
    </div>
  );
}

export default App;
