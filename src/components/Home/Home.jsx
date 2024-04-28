import React, { useEffect } from 'react'
import Product from '../Product/Product'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { api } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getAllProducts } from '../../features/Product/ProductSlice';


function Home() {
  const dispatch=useDispatch()
  const products= useSelector(getAllProducts)
   const getproducts = async () =>{
    const res = await api.get('/products')
    dispatch(fetchProducts(res.data))
   }
   useEffect(()=>{
    getproducts()
   },[])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{marginTop : "50px"}}>
       {
        products.map((product,index)=>(
          <Grid key={index} item sm={6} xs={12} md={4} lg={3} display="flex" justifyContent="center">
            <Product product={product}></Product>
          </Grid>
        ))
       }
      </Grid>
    </Box>
  )
}

export default Home
