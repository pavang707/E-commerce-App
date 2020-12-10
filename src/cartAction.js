import  {CART_ADD_ITEM,CART_REMOVE_ITEM} from './constant/cartConstant'
import products from './product'
export const addToCart = (id,qty)=> async (dispatch,getState)=>{
    const data = products.find((p)=>p._id==id)


    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product:data._id,
            name: data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
    
        }
       
    })
 localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

}

export const removeFromCart =(id)=>(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
