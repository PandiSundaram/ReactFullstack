import {getCartList,removeFromCart} from '../Redux/ProductSlice';
import { useSelector,useDispatch } from 'react-redux';



const CartList = () =>{


    const cartItems = useSelector(getCartList);
    const dispatch = useDispatch();

    console.log(cartItems);

    const removeFromCard = (productId) =>{

          dispatch(removeFromCart(productId));
    }

    

    return(<div>
          {  
              cartItems && cartItems.map((sp)=>{ return (<div>
                <p>{sp.description}</p> <br></br>
                <p>{sp.price}</p> <br></br>
                <p>{sp.title}</p> <br></br>
                <img src={sp.image}></img>
                <button onClick={() => removeFromCard(sp.id)}>REMOVE</button>
                </div>)
              })
          }
    </div>)
}


export default CartList;