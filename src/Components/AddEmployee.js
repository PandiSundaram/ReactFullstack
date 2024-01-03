import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiUtils from './ApiUtils';

const AddEmployee = () =>{


    const navigate = useNavigate();
    const[employee,setEmployee] = useState(
        {
            'name':"",
            'email':""
        }
    )

   const  updateUserName = (event) =>{

       setEmployee({...employee,name:event.target.value});
   }

   const  updateEmail = (event) =>{
       setEmployee({...employee,email:event.target.value});
    }

    const saveCustomer= () =>{
        console.log("employee"+  JSON.stringify(employee));
        const response = ApiUtils.createEmployee(JSON.stringify(employee));
       console.log("response"+ response);
       navigate("/");

    }

    const resetCustomer = () =>{
        setEmployee({
            'name' : '',
            'email' : ''
        })
    }



    return(<div>
         
         <input type="text" name="name" value={employee.name} onChange={(event) => updateUserName(event)}></input><br>
         </br>
         <input type="text" name="email" value={employee.email} onChange={(event) => updateEmail(event)}></input><br>
         </br>
         <button type="submit" onClick={()=>{saveCustomer()}}>ADD</button>
         <button type="submit" onClick={()=>{resetCustomer()}}>RESET</button>

    </div>)
}

export default AddEmployee;