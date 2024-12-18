import React, {useState} from 'react'
import'../styles/calculator.css'

function Calculator (){
    const [Num1, setNum1] = useState('');
    const [Num2, setNum2] = useState('');
    const [Result, setResult] = useState(null);

    const Add = () => setResult(Number(Num1) + Number(Num2));
    const Sub = () => setResult(Number(Num1) - Number(Num2));
    const Multi = () => setResult(Number(Num1) * Number(Num2));
    const Div = () => setResult(Number(Num1) / Number(Num2));
  return (
    <div className='maindiv'>
    <h1 className='head'>Calculator</h1>
    <div className='inputs'>

    <input 
    className='num1' 
    type='number'
    value={Num1}
    placeholder='Enter Number 1'
    onChange={(e) => setNum1(e.target.value)} 
    />

    <input 
    className='num2'
    type='number'
    value={Num2}
    placeholder='Enter Number 2'
    onChange={(e) => setNum2(e.target.value)} 
    />
    </div>
    
    <div>
    <button onClick={Add} className='button'>Addition</button>
    <button onClick={Sub} className='button'>Subtract</button>
    <button onClick={Multi} className='button'>Multiply</button>
    <button onClick={Div} className='button'>Divide</button>
    </div>
    {Result && <h3 className='Result'>Result: {Result}</h3>}
    </div>
  )
}

export default Calculator