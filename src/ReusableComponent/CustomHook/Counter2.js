
import {useState} from 'react';
import useCounter from './useCounter';
const Counter2 = () =>{


    const [count,increment] = useCounter(2,2);




    return(<div>
        <div>{count}</div>
           <button onClick={increment}>Increment</button>
    </div>)

}


export default Counter2;