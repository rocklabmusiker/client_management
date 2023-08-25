import React from 'react'
import '../child/CardComponent.css';
import IncomCardContent from './IncomCardContent';
const Incomplete = () => {
  return (
    <div className="card">
    <div className="card-content">
      <h4><b>Incomplete</b></h4>
      <IncomCardContent/>
 
      <IncomCardContent/>
      <IncomCardContent/>
      <IncomCardContent/>
     
    </div>
  </div>
  )
}

export default Incomplete;
