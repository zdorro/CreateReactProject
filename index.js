import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function whenClick() {
  ReactDOM.render(element, document.getElementById('root'));
  
}

const element = (
  <h1 className="greeting">
    Привет, мир!
  </h1>
);

const kefBtn = <button onClick={() => whenClick() }>
  {element}
</button>;


  ReactDOM.render(
    kefBtn, 
    document.getElementById('root')
  );

