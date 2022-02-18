import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const CustomButton=({
  children,
  onСlick
}) => {
  return (
    <button onClick={onСlick} className='yellow'>{children}</button>
  )
}

class App extends React.Component {
  render () {
    return (
      <CustomButton onСlick={()=>console.log('OLOLO')}>AZAZA</CustomButton>
    )
  }
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
