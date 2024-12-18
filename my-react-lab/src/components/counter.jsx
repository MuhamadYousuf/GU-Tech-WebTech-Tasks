import React, { useState } from 'react';
import'../styles/counter.css'

function Counter() {
const [count, setCount] = useState(0);

const increment = () => {
    setCount(count + 1);
};

const decrement = () => {
    if (count>0){
    setCount(count - 1);
}
};

const reset = () => {
    setCount(0);
};

return (
<div className='top'>
<div className='tocenter'><span className='count'>Count : </span><div className='tospace'><span className='num'>{count}</span></div></div>
<div className='buttondiv'>
<button onClick={increment} className='button1'>Increment</button>
<button onClick={reset} className='button3'>R e s e t</button>
<button onClick={decrement} className='button2'>Decrement</button>
</div>
<hr className='line' />
</div>
);
}
export default Counter;