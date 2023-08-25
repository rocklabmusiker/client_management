import React from 'react';
import '../child/CardComponent.css';
import IncomCardContent from './IncomCardContent';
const CompletedCard= () => {
  return (
    <div className="card">
    <div className="card-content">
      <h4><b>Completed</b></h4>
      <IncomCardContent/> 
      <IncomCardContent/>
      <IncomCardContent/>
      <IncomCardContent/>
     
    </div>
  </div>
  );
}

export default CompletedCard;
