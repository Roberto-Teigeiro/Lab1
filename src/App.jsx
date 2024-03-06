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
          <h1>Como hacer x</h1>


        </div>
      </header>
    </div>
  );
}

export default App;
