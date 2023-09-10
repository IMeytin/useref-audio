

import './App.css';
import AudioPlay from './AudioPlay';
import InputUseRef from './InputUseRef';
import PreviousState from './PreviousState';

function App() {
  return(
    <div className="App">

      <div className='container'>
        <h2>Example 1</h2>
        <InputUseRef />
      </div>

      <div className='container'>
        <h2>Example 2</h2>
        <PreviousState />
      </div>

      <div className="container">
        <h2>Example 3</h2>
        <AudioPlay />
      </div>
    </div>
  )
}

export default App;
