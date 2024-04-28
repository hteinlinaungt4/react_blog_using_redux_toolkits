import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {  descreseQty, getCart, increaseQty, remove } from '../../features/Cart/CartSlice';




export default function Cart() {
  const carts=useSelector(getCart)
  const dispatch=useDispatch()
  const handlebtn =(id,type)=>{
    if(type == "add"){
      dispatch(increaseQty(id))
    }else if(type == "sub"){
      dispatch(descreseQty(id))   
   }else if(type == "remove"){
      dispatch(remove(id)) 
   }
  }
  return (
   <Container>
     <TableContainer component={Paper} style={{marginTop:"100px"}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Qty</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {
            carts.map((cart,index)=>(
              <TableRow key={index} style={{maxHeight : "150px"}}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell ><img alt='img' style={{width:"100px",height:"100px",objectFit:"cover"}} src={cart.image}></img></TableCell>
            <TableCell align="center">{cart.title}</TableCell>
            <TableCell alignItems="center"  style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",height:"150px"}}>
               <Button align="center" size='small' variant="contained" onClick={()=>handlebtn(cart.id,"add" )}>+</Button>
                <span align="center">{cart.qty}</span>
              <Button align="center" size='small' variant="contained" onClick={()=>handlebtn(cart.id,"sub" )}>-</Button>
            </TableCell>
            <TableCell align="center">$ {parseInt(cart.qty * cart.price)}</TableCell>
            <TableCell align="center" onClick={()=>handlebtn(cart.id,"remove" )}>X</TableCell>
            </TableRow>
            ))
           }
            
        </TableBody>
      </Table>
    </TableContainer>
   </Container>
  );
}
