import React,{useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

return(
  <div>
    <p>{count}</p>
    <button onClick= {() => setCount(count +1)}>
      + 1
    </button>
    <button onClick= {() => setCount(count -1)}>
      - 1
    </button>
    <input type='number' onChange={(event) => setCount(Number(event.target.value))}></input>

  </div>
)
}
export default Counter;