import React from 'react'
import Button from '@mui/material/Button'

export default function Counter() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
      <Button variant="contained">+</Button>
      <span>0</span>
      <Button variant="contained">-</Button>
    </div>
  )
}