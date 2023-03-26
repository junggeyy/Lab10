import './App.css';

import Container from './Container';
import MyList from './ItemList';
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];
const myStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
};
function App() {
  return (
    <div className="App">
      <header className='App-header'>
       <h1>This is react app!</h1>
       <Container style ={myStyle} />
       <h1  style={{ fontWeight: 'italic' }}>My List</h1>
       <MyList items={items} className ="list"/>
      </header>
     
    </div>
  );
}

export default App;
