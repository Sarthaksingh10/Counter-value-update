
import { useState } from 'react';
import './App.css'

function App() {

let [counter,counterchange]=useState(5)

const add=()=>{
  console.log("running add")
   counter=counter+1;
   counterchange(counter)
   if (counter>20) {
    counterchange(counter=0)
   } else {
    counterchange(counter)
   }
/* document.getElementById("display").innerHTML=`Counter value : ${counter}` //Traditional method if we use javascript
   console.log(counter) */
   
}
const remove=()=>{
   counter=counter-1
   counterchange(counter)
   if (counter<0) {
    counterchange(counter=20)
   } else {
    counterchange(counter)
   }
   /* document.getElementById("display").innerHTML=`Counter value : ${counter}` //Traditional method if we use javascript
   console.log(counter) */
}

  return (
    <>
      <h1>Hello React</h1>
      <h3 id='display'>Current value : {counter}</h3>
      <button onClick={add}>Increase</button>
      <button onClick={remove}>Decrease</button>
    </>
  )
}

export default App
