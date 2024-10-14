import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { AddProductFailure, AddProductStart, AddProductSuccess, deleteProductFailure,
         deleteProductStart,
         deleteProductSuccess, 
        getProductFailure,
        getProductStart,
        getProductSuccess, 
        updateProductFailure, 
        updateProductStart,
        updateProductSuccess} from "./productRedux";

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try{
      const res = await publicRequest.post("/auth/login",user);
      dispatch(loginSuccess(res.data));
    }catch(err){
      dispatch(loginFailure())
    }
};



export const getProducts = async (dispatch) =>{
  dispatch(getProductStart());
  try{
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  }catch(err){
    dispatch(getProductFailure())
  }
};

//    DELETE PRODUCTS

export const deleteProducts = async (id, dispatch) =>{
  dispatch(deleteProductStart());
  try{
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  }catch(err){
    dispatch(deleteProductFailure())
  }
};

// Update Product

export const updateProducts = async (id, product, dispatch) =>{
  dispatch(updateProductStart());
  try{
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(updateProductSuccess({id,product}));
  }catch(err){
    dispatch(updateProductFailure())
  }
};

// Add product

export const addProducts = async (product, dispatch) =>{
  dispatch(AddProductStart());
  try{
    const res = await userRequest.post(`/products`,product);
    dispatch(AddProductSuccess(res.data));
  }catch(err){
    dispatch(AddProductFailure())
  }
};

