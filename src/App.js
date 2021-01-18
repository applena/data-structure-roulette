import { useState } from "react";
import './app.scss';

function App() {
  const [dataStructure] = useState(['linked list', 'binary tree', 'binary search tree', 'stack', 'queue', 'hashmap']);
  const [logic] = useState(['minimum value', 'maxiumn value', 'even values', 'odd values']);
  const [method] = useState(['recursively', 'iteratively']);
  const [display, setDisplay] = useState(false);
  const [num1, setNum1] = useState(-1);
  const [num2, setNum2] = useState(-1);
  const [num3, setNum3] = useState(-1);

  const generageChallenge = () => {
    setDisplay(true);
    setNum1(Math.floor(Math.random() * (dataStructure.length)));
    setNum2(Math.floor(Math.random() * logic.length));
    setNum3(Math.floor(Math.random() * method.length));
  }

  console.log(num1, num2, dataStructure)
  return (
    <div className="app">
      <button onClick={generageChallenge}>Generate Challenge</button>

      {display && 
        <p>Given a {dataStructure[num1]}, find the {logic[num2]} ... {method[num3]}.</p>
      }
    </div>
  );
}

export default App;
