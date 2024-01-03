
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ApiUtils from "./ApiUtils";

const UpdateEmployee = () =>{


    const {id} = useParams();
    const navigate = useNavigate();

    const[employee,setEmployee] = useState({
        "id":id,
        "name":"",
        "email" : ""

    })

    useEffect(()=>{
  
     
        const fetchEmp = async () =>{
            const response =  await ApiUtils.fetchEmployeeById(employee.id);
            setEmployee(response.data);

        }
     fetchEmp();

    },[])

   

    const updateName = (e) =>{
        setEmployee({...employee,"name":e.target.value});
    }

    const updateEmail = (e) =>{
        setEmployee({...employee,"email":e.target.value});
    }



    const update = async () =>{

        const response  =  await ApiUtils.updateemp(employee.id, employee);
        navigate("/");

    }


    return(<div>

         {console.log(employee)}
     
          
            <div>

        
                        <input type="text" name="name" value={employee.name} onChange={(event) => updateName(event)}></input><br>
         </br>
         <input type="text" name="email" value={employee.email} onChange={(event) => updateEmail(event)}></input><br>
         </br>
                        <button type="submit" onClick={() => update()}>UPDATE</button>
                      
              </div>
                
            


    </div>)
}

export default UpdateEmployee;