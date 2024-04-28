import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../features/Cart/CartSlice';

export default function Product({product}) {
  const dispatch=useDispatch()

  const handleCart = (id,title,image,price)=>{
    dispatch(addCart({id,title,image,price}))
  }
  return (
      <Card sx={{ maxWidth: 345,maxHeight:450 }}>
      <Link to={`/product/${product.id}`} style={{textDecoration : "none"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={`${product.image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography  gutterBottom variant="h6" component="div">
            {product.title.slice(0,20)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.slice(0,100)+" ..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <div display="flex" justifyContent="between">
          <Button size="small" color="primary" onClick={()=> handleCart(product.id,product.title,product.image,product.price)}>
            Add to Cart
          </Button>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </div>
      </CardActions>
      </Card>
  );
}