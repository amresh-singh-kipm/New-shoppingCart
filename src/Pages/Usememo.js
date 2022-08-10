import React, { useState,useMemo } from "react";

function Usememo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);
 

const counterMultiply = useMemo( function multiply(){
    console.log("hello World")
    return count*5;

},[count])

  return (
    <div className="fluid-container">
      <div className="container">
        <div className="data ">
          <h2>Count:{count}</h2> 
          <h2>item:{item}</h2>
          <h2>{counterMultiply}</h2>
          <button onClick={() => setCount(count + 1)}>Update count</button><br/><br/>   
          <button onClick={() => setItem(item + 1)}>Update item</button>
        </div>
      </div>
    </div>
  );
}

export default Usememo;
