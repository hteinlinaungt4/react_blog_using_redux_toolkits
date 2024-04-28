import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    carts : []
}
export const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addCart : (state,{payload}) =>{
          let  exitornot = []
            exitornot =  state.carts.filter(cart => cart.id == payload.id)
            if(exitornot.length < 1){
                state.carts.push({...payload,qty:1})
            }else{
                const carts = state.carts.map(cart => {
                    if(cart.id == payload.id){
                        cart.qty++
                    }
                    return cart
                })
                state.carts = carts
            }
        },
        increaseQty : (state,{payload}) =>{
            const carts =state.carts.map( cart => {
                if(cart.id == payload){
                    cart.qty++
                }
                return cart
            })
            state.carts=carts
        },
        descreseQty : (state,{payload}) => {
            const carts = state.carts.filter(cart => {
                if(cart.id == payload && cart.qty !== 1){
                    cart.qty--;
                    return cart
                }else if(cart.id !== payload)
                {
                    return cart;
                }
            })
            state.carts =carts

        },
        remove : (state,{payload})=>{
            const carts = state.carts.filter(cart => cart.id !==payload)
           state.carts= carts
        }
    }
})

export const {addCart,increaseQty,descreseQty,remove} = CartSlice.actions
export const getCart = state => state.CartSlice.carts

export default CartSlice.reducer