//components
import Products from './Products';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  return (
    <div className="App">
        <h1>
          React Hooks
        </h1>
        <br/>
        <Products />
        <Button>Add fruit</Button>
    </div>
  );
}

export default App;
