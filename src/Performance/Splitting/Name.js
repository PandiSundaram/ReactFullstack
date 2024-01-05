
import {useState} from 'react';

const Name = () =>{

    const[namelist,setNameList] = useState([]);  


    const showName  = () =>{

        import('../../NameArray').then((names) => {
           setNameList(names.default);
        })

     
    }

    return(<div>
        <h3>Name component{namelist}</h3>
        <button onClick={() => showName()}>ShowName</button>
    </div>)
}


export default Name;