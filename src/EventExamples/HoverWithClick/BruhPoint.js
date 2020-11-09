import React from 'react';

/* eslint-disable jsx-a11y/accessible-emoji */
const BruhPoint = ({ clickedIndex, index, x, y }) => (
  <text
    x={x - 9}
    y={y + 7}
    fontSize={19}
    visibility={clickedIndex === index ? 'visible' : 'hidden'}
  >
    😂
  </text>
);

export default BruhPoint;
