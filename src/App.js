import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  function calculate(e){
    e.preventDefault();
    const litres =  bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result = 0;
    
    if(gender === "male"){
      result = gramsLeft / (weight * 0.7);
    }
    else{
      result = gramsLeft / (weight * 0.6);
    }

    if(result < 0){
      result = 0;
    }
    
    setResult(result.toFixed(2));
  }
  return (
    <div className='border d-inline-block '>
      <form onSubmit={calculate}>
        <h3>Calculating alcohol blood level</h3>
        <div>
          <label>Weight</label>
          <input value={weight} type="number" step="1" onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label> 
          <select name="bottles" id="bottles" onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select name="time" id="time" onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label className='me-2'>Gender</label>
          <input type="radio" name="gender" id="male" value="male" onChange={e => setGender(e.target.value)} defaultChecked/>
          <label>Male</label>
          <input type="radio" name="gender" id="female" value="female" className='ms-2' onChange={e => setGender(e.target.value)}/>
          <label>Female</label>
        </div>
        <div>
          <output>{result}</output>
        </div>
        <div>
          <button className='btn btn-primary'>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
