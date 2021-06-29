//components
import Products from './Products';
import HubUsers from './HubUsers';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  return (
    <div className="App">
        <h1>
          React Hooks
        </h1>
        <HubUsers></HubUsers>
        <br/>
        <Products>
          Your island fruits
        </Products>
        <Button>Add fruit</Button>
    </div>
  );
}

export default App;
