
import axios from 'axios'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedProduct, selectedProduct,addTocart } from '../Redux/ProductSlice';

const Product = () => {

    const {productId} = useParams();
    console.log(productId);
    const sp = useSelector(getSelectedProduct);
    const dispatch = useDispatch();


    const fetchProduct = async () =>{
      const productResponse =  await axios.get("https://fakestoreapi.com/products/"+productId);
      console.log(productResponse);

      dispatch(selectedProduct(productResponse.data));

    }

    const addtoCartList = (sp) =>{
        console.log("selectedProduct"+ sp);
        dispatch(addTocart(sp));
    }

    useEffect(() =>{
        fetchProduct();

    },[])

    return(
    <div>
        {console.log(sp)}
        {/* {console.log(spList)} */}
        {sp && <div key={sp.id}> <p>{sp.category}</p> <br></br>
        <button onClick={() => addtoCartList(sp)}>ADD TO CART</button>
        <p>{sp.description}</p> <br></br>
        <p>{sp.price}</p> <br></br>
        <p>{sp.title}</p> <br></br>
        <img src={sp.image}></img>
        </div>}
    </div>)
}

export default Product;