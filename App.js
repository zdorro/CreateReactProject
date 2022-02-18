import logo from './logo.svg';
import './App.css';


function clickMe() {
  alert('AZA-ZA-Za-ZA-ZAAAAAAAAA');
}

function App() {
  return (
    <div class="ButtonClick">
      <button onClick={() => console.log(clickMe)}>
        Да нажмиии, чего ты)
      </button>
    </div>
  );
}

export default App;
