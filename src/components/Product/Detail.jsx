import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { api } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { getSelectedProducts, removeSelectedProduct, selectedProduct } from '../../features/Product/ProductSlice';
import { addCart } from '../../features/Cart/CartSlice';

function Detail() {
    const {id}=useParams();
    const product=useSelector(getSelectedProducts)
    const dispatch=useDispatch()
    const detailProduct = async ()=>{
      const res = await api.get(`/products/${id}`)
      dispatch(selectedProduct(res.data))
    }
    useEffect(()=>{
      if(id) detailProduct()
      return () =>{
        dispatch(removeSelectedProduct({}))
      }
    },[id])

  const handleCart = (id,name,image,price)=>{
      dispatch(addCart(id,name,image,price))
    }
  return (
    (product) ? 
    <div style={{marginTop:100,display:"flex",justifyContent:"center"}}>
       <Card sx={{ maxWidth: 700,maxHeight:650 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={`${product.image}`}
          alt="green iguana"
          style={{objectFit:"cover"}}
        />
        <CardContent>
          <Typography  gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
          <Button size="small" color="primary" onClick={()=> handleCart(product.id,product.name,product.image,product.price)}>
            Add to Cart
          </Button>
          <Typography style={{fontWeight:"bolder"}} variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </div>
      </CardActions>
      </Card>
    </div>
    : 
    <h1>Data Not Found</h1>
  )
}

export default Detail
