import './App.scss';
import Player from './components/Player/Player';

function App() {

  return (
    <div className="App">
      <h1>Games night</h1>
      <h2>Who's ganna win tonight?</h2>
      <Player name='player1' score='1'/>


    </div>
  );
}

export default App;
