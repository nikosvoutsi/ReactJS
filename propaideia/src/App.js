import { useState, useEffect } from "react";
import "./index.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const [calculation, setCalculation] = useState(0);
  const [calculation2, setCalculation2] = useState(0);
  const [calculation3, setCalculation3] = useState(0);
  const [calculation4, setCalculation4] = useState(0);
  const [calculation5, setCalculation5] = useState(0);
  const [calculation6, setCalculation6] = useState(0);
  const [calculation7, setCalculation7] = useState(0);
  const [calculation8, setCalculation8] = useState(0);
  const [calculation9, setCalculation9] = useState(0);
  const [calculation10, setCalculation10] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 1);
  }, [count]);  

  useEffect(() => {
    setCalculation2(() => count * 2);
  }, [count]);   

  useEffect(() => {
    setCalculation3(() => count * 3);
  }, [count]);  

  useEffect(() => {
    setCalculation4(() => count * 4);
  }, [count]);  

  useEffect(() => {
    setCalculation5(() => count * 5);
  }, [count]); 

  useEffect(() => {
    setCalculation6(() => count * 6);
  }, [count]);  

  useEffect(() => {
    setCalculation7(() => count * 7);
  }, [count]);  

  useEffect(() => {
    setCalculation8(() => count * 8);
  }, [count]);    

  useEffect(() => {
    setCalculation9(() => count * 9);
  }, [count]);   

  useEffect(() => {
    setCalculation10(() => count * 10);
  }, [count]); 

  return (
    <><h2>Επίλεξε έναν αριθμό για να δεις την προπαίδεια</h2>
      <p id="header">Αριθμός : <b>{count}</b></p>
      <p><span><button onClick={() => setCount((c) =>(c > 1) ? c - 1 : 1)}>-</button></span><span><button onClick={() => setCount((c) => c + 1)}>+</button></span></p>
      <h3>Προπαίδεια του {count}</h3>
      <p>1 X {count} = {calculation}</p>
      <p>2 X {count} = {calculation2}</p>
      <p>3 X {count} = {calculation3}</p>
      <p>4 X {count} = {calculation4}</p>
      <p>5 X {count} = {calculation5}</p>
      <p>6 X {count} = {calculation6}</p>
      <p>7 X {count} = {calculation7}</p>
      <p>8 X {count} = {calculation8}</p>
      <p>9 X {count} = {calculation9}</p>
      <p>10 X {count}= {calculation10}</p>
    </>
  );
}

