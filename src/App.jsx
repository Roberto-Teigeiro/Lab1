import './App.css';


import Openai from './openai';
import Spotify from './spotify';
import Wikipedia from './wikipedia';
import Nodejs from './nodejs';
function App() {

  return (
    <div className="App">
      <header className="App-header">

          
          <div className="container">
          <Nodejs/>
          <Spotify/>
          <Openai />
          <Wikipedia/>
          </div>

        




        <div className="center-align">

        </div>
      </header>
    </div>
  );
}

export default App;
