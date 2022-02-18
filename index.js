import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




class App extends React.Component {
    render() {
        return (
            <button className='yellow' onClick={() =>console.log('nu epta, nu kuda???')}>Privet, SUKA</button>
        )
    }
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
