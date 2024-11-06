import { doc, setDoc } from "firebase/firestore";
import { ORDER_FAIL, ORDER_REQUEST, ORDER_SUCCESS } from "../constants/orderConstants";
import { db } from "../firebase.config";

export const saveOrder = (data,orderId) => async (dispatch) => {
    try{
     
      
          dispatch({ type: ORDER_REQUEST });
            console.log(data)
         await  setDoc(doc(db, "logisticOrder",orderId ),data ).then(async (res)=>{
          
      
         dispatch({ type: ORDER_SUCCESS,payload:data });
  
      }).catch((err)=>{
        alert(err.message)
         dispatch({
        type: ORDER_FAIL,
        payload: err.message,
      });
      })
       
    }catch(err){
      alert(err.message)
       dispatch({
        type: ORDER_FAIL,
        payload: err.message,
      });
    }
  }