import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCart } from '../../features/Cart/CartSlice';


export default function Header() {
  const carts=useSelector(getCart)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{top:0}}>
        <Toolbar>
          <Link style={{
            textDecoration : "none",
            color : "#fff",
          }} to={'/'}>
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              Blog 
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Link to={'/cart'} style={
              {
                color : "#fff",
              }
            }>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={(carts.length >= 1) ? carts.length : "0"} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
   </Box>
  );
}