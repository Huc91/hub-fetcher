import React, { useReducer } from 'react';

//components
import Products from './Products';
import HubUsers from './HubUsers';
import { MyFruits } from './MyFruits';

import './App.css';

const myHarvestState = {
  season: 'summer',
  count: 0,
}

const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return myHarvestState
  }
}


export const MyHarvestContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, myHarvestState)
  return (
    <div className="App">
        <h1>
          React Hooks
        </h1>
        <MyHarvestContext.Provider value={{state, dispatch}}>
          <HubUsers></HubUsers>
          <br/>
          <MyFruits />
          <Products>
            Your island fruits
          </Products>
        </MyHarvestContext.Provider>
    </div>
  );
}

export default App;
