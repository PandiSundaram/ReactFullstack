import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'




export const getProducts = createAsyncThunk("getproducts",async ()=>{

   let productsResponse =  await axios.get("https://fakestoreapi.com/products").catch((error) =>{
                 console.log("error"+ error);
             });

   return productsResponse.data;
})



export const ProductSlice = createSlice({


    name : 'products',
    initialState : {
        productlist:[],
        product:{},
        cartList:[],
    },


      reducers: {

        addProducts : (state,{type,payload}) =>{

            state.productlist = payload;
        },

        selectedProduct : (state,{type,payload}) => {
            state.product= payload;
        },

        addTocart : (state,{type,payload}) =>{

            state.cartList.push(payload);
        },

        removeFromCart : (state,{type,payload}) =>{
            const newlist = state.cartList.filter((itme) => itme.id !== payload).map((item) => item);
            state.cartList = newlist;
        }

      },

      
      extraReducers:(builder) => {

        builder
        .addCase(getProducts.fulfilled,(state,{payload})=>{
            state.productlist = payload;
        }).addCase(getProducts.pending,() =>{
            console.log("Pending");
        }).addCase(getProducts.rejected,()=>{
            console.log("Rejected");
        });

      }

}) 

export const getproductlist = (state)=> state.products.productlist;
export const getSelectedProduct = (state) => state.products.product;
export const getCartList = (state) => state.products.cartList;
export const {addProducts,selectedProduct,addTocart,removeFromCart} = ProductSlice.actions;
export default ProductSlice.reducer;
