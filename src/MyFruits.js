import React, { useContext } from 'react';

//Context
import { MyHarvestContext } from './App';

export function MyFruits(){

const { state } = useContext(MyHarvestContext);

  return (
    <div>
      Fruits in my inventory: {state.count || 0}
    </div>
  );
}
