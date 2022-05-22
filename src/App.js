import './App.css';
import React, { useState } from 'react';
import TousTask from './components/TousTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RandNumCol} from './date'
function App() {
  const addNum = (x) => {
    setList(RandNumCol(x,-100,100))
  }
    
    const [list, setList] = useState([])
    console.log(setList)

    
    return (
      <div className="App">
         <h2>Choose a random number and watch the magic happen :)</h2>
        
        <TousTask list={list} addNum={addNum} style={{marginTop:'30px'}}/>
      </div>
    )
  }
  


export default App;
