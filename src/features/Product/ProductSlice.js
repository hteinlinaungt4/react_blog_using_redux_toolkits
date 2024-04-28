import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : [],
    product : {}
}

export const ProductSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        fetchProducts : (state,{payload}) =>{
            state.products = payload
        },
        selectedProduct : (state,{payload}) =>{
            state.product = payload
        },
        removeSelectedProduct : (state) =>{
            state.product = {}
        }
    }
})

export const {fetchProducts,selectedProduct,removeSelectedProduct} = ProductSlice.actions
export const getAllProducts = state => state.ProductReducer.products
export const getSelectedProducts = state => state.ProductReducer.product

export default ProductSlice.reducer