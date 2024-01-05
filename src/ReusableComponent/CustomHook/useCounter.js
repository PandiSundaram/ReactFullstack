import {useState} from 'react';

const useCounter = (value,digit) =>{


    const [count,setCount] = useState(value);


    const increment = () =>{
         setCount(count+digit);
    }

    const decrement = () =>{
        setCount(count-digit);
    }

    const reset = () =>{
        setCount(0);
    }



    return [count,increment,decrement,reset];


}

export default useCounter;