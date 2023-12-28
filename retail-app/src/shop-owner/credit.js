import React from 'react'
import { useParams } from 'react-router'
function Credit() {
  const{customerid}=useParams()
  return (
 <>
  {customerid}
 </>
   
  )
}

export default Credit
