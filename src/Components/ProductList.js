
import axios from 'axios'
import { useState , useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
// import { setProducts } from '../Redux/Actions';
import {addProducts} from '../Redux/ProductSlice';
import { useNavigate } from 'react-router-dom';
import { getproductlist ,getProducts} from '../Redux/ProductSlice';


const ProductList = () =>
{
    
   // const [productlist,setProductList] = useState([]);

 

   const productlist = useSelector(getproductlist);

   console.log("pandi"+ productlist);

   const navigate = useNavigate();

   const dispatch = useDispatch();

    useEffect(()=>{


        const fetchProducts = () =>{
        
            // let productsResponse =  await axios.get("https://fakestoreapi.com/products").catch((error) =>{
            //     console.log("error"+ error);
            // });

            dispatch(getProducts());
           // setProductList(productspromise.data);
     
         }
     
         fetchProducts();

    },[])


    const loadProduct = (event,id) => {
        event.preventDefault();
        navigate("/product/"+id);   
    }


    return(<div>
        {console.log(productlist)}
        {productlist!=null &&  productlist.map((product) => <div key={product.id}>
               <p>{product.title}</p>
               <p>{product.price}</p>
               <button onClick={(event) => loadProduct(event,product.id)}>Select</button>
            </div>)}
          
    </div>)

}

export default ProductList;