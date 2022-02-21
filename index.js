import React from 'react';
import ReactDOM from 'react-dom';

const MyButton=({onСlick}) => {
  return (
    <button onClick={onСlick}>Trololo</button>
  )
}

  ReactDOM.render(
    <MyButton onСlick={()=>console.log('OLOLO')}></MyButton>,
    document.getElementById('root')
  );
