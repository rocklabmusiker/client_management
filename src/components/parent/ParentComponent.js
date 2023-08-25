import React from 'react';
import CardComponent from '../child/CardComponent';
import Incomplete from '../card/Incomplete';
import './ParentComponent.css';

const ParentComponent = () => (
    <div className="parent-container">
      <Incomplete />

      <CardComponent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lectus at turpis laoreet, sit amet commodo purus vehicula." />
      <CardComponent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lectus at turpis laoreet, sit amet commodo purus vehicula." />
      <CardComponent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lectus at turpis laoreet, sit amet commodo purus vehicula." />
      <CardComponent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lectus at turpis laoreet, sit amet commodo purus vehicula." />
      <CardComponent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lectus at turpis laoreet, sit amet commodo purus vehicula." />
      <CardComponent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lectus at turpis laoreet, sit amet commodo purus vehicula." />
    </div>
  );

export default ParentComponent;
