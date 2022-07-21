//2. setCount(count + 1); -> onUP으로 넘겨줌
// 1. setCount(c=>c+1)

import React, { useState } from 'react';
import './style.css';

function CounterButton(props) {
  return (
    <p>
      <input
        type="button"
        value="+"
        onClick={() => {
          props.onUP();
        }}
      ></input>

      <input
        type="button"
        value="-"
        onClick={() => {
          props.onDown();
        }}
      ></input>
    </p>
  );
}

export default function App() {
  let _count = useState(0);
  let count = _count[0];
  let setCount = _count[1];

  function clickHandler() {
    alert('hi');
  }

  return (
    <div>
      <h1>Counter</h1>
      <CounterButton
        onUP={() => setCount(count + 1)}
        onDown={() => setCount(count - 1)}
      ></CounterButton>
      <p>{count}</p>
    </div>
  );
}
