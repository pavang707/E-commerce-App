import {PRODUCT_LIST_SUCSESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_FAILED,
PRODUCT_DETAILS_FAILED,
PRODUCT_DETAILS_SUCSESS,
PRODUCT_DETAILS_REQUEST} from './constant/productConstant'
import products from './product'
    export const listProducts =() => (dispatch)=> {
        console.log(products)
        try{
            dispatch({type:PRODUCT_LIST_REQUEST})
            const data=products

            dispatch({
                type:PRODUCT_LIST_SUCSESS,
                payload:data
            })
        }
        catch(error){
            dispatch({
                type:PRODUCT_LIST_FAILED,
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message,
            })
        }
    }




    export const listProductDetails =(id) => (dispatch)=> {
        try{
            dispatch({type:PRODUCT_DETAILS_REQUEST})
            const data= products.find((p) => p._id === id)
            console.log(data)
            dispatch({
                type:PRODUCT_DETAILS_SUCSESS,
                payload:data,
            })
        }
        catch(error){
            dispatch({
                type:PRODUCT_DETAILS_FAILED,
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message,
            })
        }
    }