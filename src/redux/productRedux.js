import {createSlice} from "@reduxjs/toolkit"


const productSlice = createSlice({
    name: "product",
    initialState:{
        products: [],
        isFetching: false,
        error: false,
    },
    reducers:{

        // GET ALL

        getProductStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        getProductSuccess:(state,action)=>{
            state.isFetching = false
            state.products = action.payload;
        },
        getProductFailure:(state,action)=>{
            state.isFetching = false
            state.error = true;
        },


        //Delete Products

        deleteProductStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        deleteProductSuccess:(state,action)=>{
            state.isFetching = false
            state.products.splice(
                state.products.findIndex((item)=> item._id === action.payload),1
            )
           
        },
        deleteProductFailure:(state)=>{
            state.isFetching = false
            state.error = false;
        },


         //UPDATE Products

         updateProductStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        updateProductSuccess:(state,action)=>{
            state.isFetching = false
            state.products[state.products.findIndex((item)=> item._id === action.payload.id)]
             = action.payload.product
           
        },
        updateProductFailure:(state)=>{
            state.isFetching = false
            state.error = false;
        },


         //ADD Product

         AddProductStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        AddProductSuccess:(state,action)=>{
            state.isFetching = false
            state.products.push(action.payload)
           
        },
        AddProductFailure:(state)=>{
            state.isFetching = false
            state.error = false;
        }     
            
        }
})

export const {getProductStart,getProductSuccess,getProductFailure,
                deleteProductStart,deleteProductSuccess,deleteProductFailure,
                updateProductStart, updateProductSuccess, updateProductFailure,
                AddProductStart, AddProductSuccess, AddProductFailure
} = productSlice.actions
export default productSlice.reducer