
import axios from 'axios'

const URL = "http://localhost:8080/api/employee";

const HEADERS = {
    headers: {

      'Content-Type': 'application/json'
    
    },
  };



const createEmployee = async (employee) => {

    
    
      let response = null;

    try{
         response = await axios.post(URL,employee,HEADERS);
        if(response!=null){
            console.log(JSON.stringify(response));
        }
    }catch(error){
        console.log(error);
        response = error;
    }
   

   return response;


}

const getEmployees =  () =>{

    return axios.get(URL,HEADERS);
}

const deleteEmployee = async (id) =>{
   return  await axios.delete(URL+"/"+id,HEADERS);
}

const fetchEmployeeById = (id) =>{
    return  axios.get(URL+"/"+id,HEADERS);
}

const updateemp =  async (id,employee) => {

   return await axios.put(URL+"/"+id,employee,HEADERS);
}

const ApiUtils = {
    createEmployee,
    getEmployees,
    deleteEmployee,
    fetchEmployeeById,
    updateemp
}

export default ApiUtils;