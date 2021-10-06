import React, {useState, useEffect} from 'react';
import "./App.css";



const App = () => {

    const [preState, setPreState] = useState("");
    const [curState, setCurState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const inputNum = e => {

    }

    const operatorType = e => {

    }

    const equals = e => {

    }

    const minusPlus = () => {
      
    }

    const percent = () => {

    }

    const reset = () => {
      
    }

  return (
    <div className="container">
      <div className="sreen">
        <div classNmae="btn light-gray" onClick={reset}>AC</div>
        <div classNmae="btn light-gray" onClick={percent}>%</div>
        <div classNmae="btn light-gray" onClick={minusPlus}>+/-</div>
        <div classNmae="btn orange" onClick={operatorType}>/</div>
        <div classNmae="btn" onClick={inputNum}>7</div>
        <div classNmae="btn" onClick={inputNum}>8</div>
        <div classNmae="btn" onClick={inputNum}>9</div>
        <div classNmae="btn orange" onClick={operatorType}>X</div>
        <div classNmae="btn" onClick={inputNum}>4</div>
        <div classNmae="btn" onClick={inputNum}>5</div>
        <div classNmae="btn" onClick={inputNum}>6</div>
        <div classNmae="btn orange" onClick={operatorType}>+</div>
        <div classNmae="btn" onClick={inputNum}>1</div>
        <div classNmae="btn" onClick={inputNum}>2</div>
        <div classNmae="btn" onClick={inputNum}>3</div>
        <div classNmae="btn orange" onClick={operatorType}>-</div>
        <div classNmae="btn" onClick={inputNum}>0</div>
        <div classNmae="btn" onClick={inputNum}>.</div>
        <div classNmae="btn" onClick={equals}>=</div>
      </div>
      
    </div>
  )
}

export default App
