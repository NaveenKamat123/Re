import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayCounter() {
  const {CounterVal}=useSelector(store=>store.counter);

  return (
    <>
   <p className="lead mb-4">Counter Current value: {CounterVal}</p>
        
    </>
  )
}
