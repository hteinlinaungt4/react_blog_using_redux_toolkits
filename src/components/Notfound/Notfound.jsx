import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
function Notfound() {
    const navigate=useNavigate()
  return (
    <div>
      <h1>Not Found</h1>
      <Button variant="contained" onClick={()=>{navigate('/')}} >Go Back</Button>
    </div>
  )
}

export default Notfound
