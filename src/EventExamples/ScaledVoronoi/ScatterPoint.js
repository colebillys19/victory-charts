import React from 'react';

const ScatterPoint = ({ active, color, x, y }) => (
  <circle
    cx={!isNaN(x) ? x : 0}
    cy={!isNaN(y) ? y : 0}
    r={3}
    fill={color}
    visibility={active ? 'visible' : 'hidden'}
  />
);

export default ScatterPoint;
