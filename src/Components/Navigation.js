

import {getCartList} from '../Redux/ProductSlice';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';



const Navigation = () =>{

   const cartlist = useSelector(getCartList);
   const navigate = useNavigate();

   console.log(cartlist.length);

 
   const showSelectedProducts = () => {
    navigate("/cart");
   }
     
   


    return(<div>
          <h3>ONLINE STORE</h3>
          <button onClick={() => showSelectedProducts()}>SHOW CART {cartlist && cartlist.length}</button>
          
    </div>)


}

 export default Navigation