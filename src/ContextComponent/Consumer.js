
import {useContext} from 'react';
import {dataContext} from './Provider'

const Consumer = () =>{

    const data = useContext(dataContext);

    console.log(data);

    return(<div>
        <p>{data}</p>
    </div>)

}


export default Consumer;