import logo from './logo.svg';
import './App.css';
import M from 'materialize-css';
import imagen1 from "./pika-1709343421048-1x.png"
import Openai from './openai';
import Spotify from './spotify';
import Wikipedia from './wikipedia';
import Nodejs from './nodejs';
function App() {

  return (
    <div className="App">
      <header className="App-header">

          

          <Nodejs/>
          <Spotify/>
          <Openai />
          
          <Wikipedia/>


        




        <div class="center-align">
          <h1>Como hacer x</h1>


        </div>
      </header>
    </div>
  );
}

export default App;
