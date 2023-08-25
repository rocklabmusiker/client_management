import React from 'react'
import '../child/CardComponent.css'
import UnderReviewCard from './UnderReview'
const UnderReviewCardViews = () => {
  return (
    <div className="card">
    <div className="card-content">
      <h4><b>To Do</b></h4>
     <UnderReviewCard/>
    </div>
  </div>
  )
}

export default UnderReviewCardViews
