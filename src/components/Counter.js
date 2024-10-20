import React from 'react'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../action/CounterAction'

export default function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state)
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
      <Button onClick={() => dispatch(increment())} variant="contained">+</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())} variant="contained">-</Button>
    </div>
  )
}