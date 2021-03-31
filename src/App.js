import './App.css';

// Components
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

function App() {
  // Functions and properties for components here
  return (
    <div className='App container'>
      <div className='row bg-white rounded mt-5 shadow-sm p-4'>
        <Header />
        <Form />
      </div>
      <List />
    </div>
  );
}

export default App;
