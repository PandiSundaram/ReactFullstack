
import {useState} from 'react'
import useCounter from './useCounter';
const Counter1 = () =>{


    const [count,increment,decrement,reset] = useCounter(1,5);

    // const [count,setCount] = useState(0);


    // const increment = () =>{
    //      setCount(count+1);
    // }

    // const decrement = () =>{
    //     setCount(count-1);
    // }

    // const reset = () =>{
    //     setCount(0);
    // }


    return(<div>
        <div>{count}</div>
           <button onClick={increment}>Increment</button>
           <button onClick={decrement}>Decrement</button>
           <button onClick={reset}>Reset</button>
    </div>)

}


export default Counter1;