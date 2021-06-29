//components
import Products from './Products';
import Button from 'react-bootstrap/Button';

import './App.css';

function formatName(user){
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: 'Micheal',
  lastName: 'Scott',
  image: 'https://picsum.photos/200/300'
}

function App() {
  return (
    <div className="App">
        <h1>
          Learn React, {formatName(user)}
        </h1>
        <br/>
        <img src={user.image} alt="user_image"></img>
        <Products />
        <Button>Add fruit</Button>
    </div>
  );
}

export default App;
