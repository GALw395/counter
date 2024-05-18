import { useState } from 'react';
import './App.css';




function App() {

  let [count, setCount] = useState(0)

  let incFun = () => count < 5 ? setCount(++count) : count

  let resetFun = () => setCount(count=0)

  return (
    <div className="App">

      <div className="conteiner">
        <div className="conteiner_monitor">
          <p className="conteiner_monitor-text">{count}</p>
        </div>
        <div className="conteiner_button">
          <button className="conteiner_button-inc" onClick={incFun}>inc</button>
          <button className="conteiner_button-reset" onClick={resetFun}>reset</button>
        </div>
      </div>

    </div>
  );
}



export default App;
