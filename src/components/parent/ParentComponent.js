import React from 'react';
import Incomplete from '../card/Incomplete';
import './ParentComponent.css';
import ToDoCard from '../card/ToDoCard';
import DointCard from '../card/Doingcard';
import CompletedCard from '../card/CompletedCard';
import UnderReviewCardViews from '../card/UnderReviewCardView';
const ParentComponent = () => (
    <div className="parent-container">
      <Incomplete />

      <ToDoCard />
      <DointCard />
      <UnderReviewCardViews  />
      <CompletedCard />
      <Incomplete />
    </div>
  );

export default ParentComponent;
