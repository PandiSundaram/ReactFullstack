
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import ApiUtils from './ApiUtils';
const ListEmployee = () =>{

    const[employeeList,setEmployeeList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        console.log("i am in useeffect");

        const fetchData = async () =>{
       
            const response = await ApiUtils.getEmployees();
            console.log(response.data);
            setEmployeeList(response.data);     
         }
     
     
     fetchData();
      

    },[])

    

    const deleteEmployee = async (e) =>{
        console.log(e.target.id);
       await ApiUtils.deleteEmployee(e.target.id);
       const emp = employeeList.filter(em => em.id != e.target.id).map(e => e);
        setEmployeeList(employeeList.filter(em => em.id != e.target.id).map(e => e));

        console.log("employees"+ employeeList)

    }

    const editEmployee = (e) =>{

        navigate("/updateEmployee/"+e.target.id);

    }


    return(<div>

      {console.log("i am in render")}
        
       {
        
        employeeList.map(element => 
                  <div key={element.id}>
                       <div>
                          {element.name}
                        </div>
                        <div>
                          {element.email}
                        </div>
                        <button type="submit" id={element.id} onClick={(e) => editEmployee(e)}>EDIT</button>
                        <button type="submit" id={element.id} onClick={(e) => deleteEmployee(e)}>DELETE</button>
                      
                    </div>)

                  
            
}
        <br></br>
        <button type="button" onClick={() => navigate("/addEmployee")}>AddEmployee</button>
            
         
    </div>)
}

export default ListEmployee;